import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {Table, message, Popconfirm} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";

import TableLayoutWrapper from "../TableLayoutWrapper";
import UserService from '../../services/api/users';
import I18n from '../../I18n/config';

const Users = () => {
    const {t} = useTranslation();
    const [total, setTotal] = useState(0);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [requestParams, setRequestParams] = useState({
        page: 1,
        limit: 5,
    });

    const columns = [
        {
            title: t('id'),
            key: 'id',
            index: 0,
            width: 20,
            dataIndex: 'id',
            render: data => <span>{data}</span>
        },
        {
            title: t('name'),
            index: 0,
            width: 700,
            key: 'name',
            dataIndex: 'name',
            render: data => <span>{data}</span>
        },
        {
            title: t('auth.username'),
            index: 1,
            width: 700,
            key: 'username',
            dataIndex: 'username',
            render: data => <span>{data}</span>
        },
        {
            title: t('email'),
            index: 1,
            width: 700,
            key: 'email',
            dataIndex: 'email',
            render: data => <span>{data}</span>
        },
        {
            title: t('actions'),
            key: 'actions',
            width: 700,
            render: (_, row) => (
                <div className="flex">
                    <p className="mx-2 cursor-pointer"><EditOutlined/></p>
                    <Popconfirm
                        placement="topRight"
                        okText={t('yes')}
                        cancelText={t('no')}
                        onConfirm={() => removeUser(row.id)}
                        title={t('messages.delete_user_confirm')}
                    >
                        <DeleteOutlined/>
                    </Popconfirm>
                </div>
            )
        }
    ]

    const getUsers = () => {
        let isMounted = true;
        if (isMounted) {
            setLoading(true);
            UserService.getUsers()
                .then(res => {
                    const data = res.data.map(item => ({
                        ...item,
                        key: item.id
                    }));
                    if (isMounted) {
                        setUsers(data);
                        setTotal(res.data.length);
                    }
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => setLoading(false));
        }
        return () => {
            isMounted = false;
        };
    }

    const removeUser = id => {
        setLoading(true);
        UserService.deleteUser(id)
            .then(() => {
                setUsers(
                    users.filter(user => {
                        return user.id !== id;
                    })
                );
                message.info(I18n.t('messages.user_deleted'));
            })
            .finally(() => setLoading(false));
    }

    const updateTable = pagination => {
        setRequestParams({
            ...requestParams,
            page: pagination.current,
            limit: pagination.pageSize
        });
    };


    useEffect(getUsers, []);

    return (
        <TableLayoutWrapper title={t('users')} button={
            <button className="bg-green-600 text-white text-sm py-3 px-10 font-bold focus:outline-none rounded">
                {t('addUser')}
            </button>
        }>
            <Table
                size="small"
                dataSource={users}
                loading={loading}
                columns={columns}
                onChange={updateTable}
                showSorterTooltip={false}
                pagination={{
                    total,
                    current: requestParams.page,
                    pageSize: requestParams.limit,
                    hideOnSinglePage: true
                }}
                scroll={{x: 700}}
            />
        </TableLayoutWrapper>
    );
}

export default Users;
