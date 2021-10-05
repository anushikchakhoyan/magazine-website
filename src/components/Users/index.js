import {isEmpty} from "lodash-es";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {Table, message, Popconfirm} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";

import TableLayoutWrapper from "../TableLayoutWrapper";
import AddEditUserModal from "../AddEditUserModal";
import UserService from '../../services/api/users';
import I18n from '../../I18n/config';

const Users = () => {
    const {t} = useTranslation();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editSelectedRow, setEditSelectedRow] = useState(null);
    const [toggleAddEditUserModal, setToggleAddEditUserModal] = useState(false);

    const columns = [
        {
            title: t('id'),
            key: 'id',
            width: 30,
            index: 0,
            dataIndex: 'id',
            render: data => <span>{data}</span>
        },
        {
            title: t('name'),
            index: 1,
            width: 700,
            key: 'name',
            dataIndex: 'name',
            render: data => <span>{data}</span>
        },
        {
            title: t('auth.username'),
            index: 2,
            width: 700,
            key: 'username',
            dataIndex: 'username',
            render: data => <span>{data}</span>
        },
        {
            title: t('email'),
            index: 3,
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
                    <p className="mx-2 cursor-pointer" onClick={() => setEditSelectedRow(row)}><EditOutlined/></p>
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
                    }
                })
                .catch(error => console.log(error))
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

    const handleCloseAddEditModal = ({payload} = {}) => {
        setToggleAddEditUserModal(false);
        if (!isEmpty(payload) && payload.value) {
            if (payload.edit) {
                const idx = users.findIndex(user => user.id === editSelectedRow.id);
                users[idx] = payload.value;
                payload.value.key = editSelectedRow.id;
                payload.value.id = editSelectedRow.id;
                setUsers([...users]);
            } else {
                payload.value.key = users.length + 1;
                payload.value.id = users.length + 1;
                setUsers([...users, payload.value]);
            }
        }
        setEditSelectedRow(null);
    };

    const openAddEditUserModal = () => {
        if (editSelectedRow) {
            setToggleAddEditUserModal(true);
        }
    };

    useEffect(getUsers, []);
    useEffect(openAddEditUserModal, [editSelectedRow]);

    return (
        <>
            <TableLayoutWrapper title={t('users')} button={
                <button className="bg-green-600 text-white text-sm py-3 px-10 font-bold focus:outline-none rounded"
                        onClick={() => setToggleAddEditUserModal(true)}>
                    {t('addUser')}
                </button>
            }>
                <Table
                    size="small"
                    scroll={{x: 700}}
                    dataSource={users}
                    loading={loading}
                    columns={columns}
                    pagination={false}
                    showSorterTooltip={false}
                />
            </TableLayoutWrapper>
            {toggleAddEditUserModal && (
                <AddEditUserModal editSelectedRow={editSelectedRow} closeDialog={handleCloseAddEditModal}/>
            )}
        </>
    );
}

export default Users;
