import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {Table, message, Popconfirm} from "antd";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";

import TableLayoutWrapper from "../TableLayoutWrapper";
import PostsService from '../../services/api/posts';
import I18n from '../../I18n/config';
import UserService from "../../services/api/users";

const Posts = () => {
    const {t} = useTranslation();
    const [total, setTotal] = useState(0);
    const [posts, setPosts] = useState([]);
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
            title: t('title'),
            index: 1,
            width: 700,
            key: 'title',
            dataIndex: 'title',
            render: data => <span>{data}</span>
        },
        {
            title: t('body'),
            index: 2,
            width: 700,
            key: 'body',
            dataIndex: 'body',
            render: data => <span>{data}</span>
        },
        {
            title: t('actions'),
            key: 'actions',
            width: 700,
            render: (_, row) => (
                <div className="flex">
                    <p className="mx-2 cursor-pointer"><EditOutlined /></p>
                    <Popconfirm
                        placement="topRight"
                        okText={t('yes')}
                        cancelText={t('no')}
                        onConfirm={() => removePost(row.id)}
                        title={t('messages.delete_post_confirm')}
                    >
                        <DeleteOutlined />
                    </Popconfirm>
                </div>
            )
        }
    ]

    const getPosts = () => {
        let isMounted = true;
        if (isMounted) {
            setLoading(true);
            PostsService.getPosts()
                .then(res => {
                    const data = res.data.map(item => ({
                        ...item,
                        key: item.id
                    }));
                    if (isMounted) {
                        setPosts(data);
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

    const removePost = id => {
        setLoading(true);
        PostsService.deletePost(id)
            .then(() => {
                setPosts(
                    posts.filter(post => {
                        return post.id !== id;
                    })
                );
                message.info(I18n.t('messages.post_deleted'));
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


    useEffect(getPosts, []);

    return (
        <TableLayoutWrapper title={t('posts')} button={
            <button className="bg-green-600 text-white text-sm py-3 px-10 font-bold focus:outline-none rounded">
                {t('addPost')}
            </button>
        }>
            <Table
                size="small"
                scroll={{x: 700}}
                dataSource={posts}
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
            />
        </TableLayoutWrapper>
    );
}

export default Posts;

