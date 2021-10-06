import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {Table, message, Popconfirm, Tooltip} from "antd";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {isEmpty} from "lodash-es";

import TableLayoutWrapper from "../TableLayoutWrapper";
import PostsService from '../../services/api/posts';
import AddEditPostModal from "../AddEditPostModal";
import I18n from '../../I18n/config';

const Posts = () => {
    const {t} = useTranslation();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editSelectedRow, setEditSelectedRow] = useState(null);
    const [toggleAddEditPostModal, setToggleAddEditPostModal] = useState(false);

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
                <div className="flex items-baseline">
                    <Tooltip title={t('editPost')}>
                        <p className="mx-2 cursor-pointer" onClick={() => setEditSelectedRow(row)}><EditOutlined/></p>
                    </Tooltip>
                    <Tooltip title={t('removePost')}>
                        <Popconfirm
                            placement="topRight"
                            okText={t('yes')}
                            cancelText={t('no')}
                            onConfirm={() => removePost(row.id)}
                            title={t('messages.delete_post_confirm')}
                        >
                            <DeleteOutlined/>
                        </Popconfirm>
                    </Tooltip>
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
                    const data = res.data.slice(0, 10).map(item => ({
                        ...item,
                        key: item.id
                    }));
                    if (isMounted) {
                        setPosts(data);
                    }
                })
                .catch(error => console.log(error))
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

    const handleCloseAddEditModal = ({payload} = {}) => {
        setToggleAddEditPostModal(false);
        if (!isEmpty(payload) && payload.value) {
            if (payload.edit) {
                const idx = posts.findIndex(post => post.id === editSelectedRow.id);
                posts[idx] = payload.value;
                payload.value.key = editSelectedRow.id;
                payload.value.id = editSelectedRow.id;
                setPosts([...posts]);
            } else {
                payload.value.key = posts.length + 1;
                payload.value.id = posts.length + 1;
                setPosts([...posts, payload.value]);
            }
        }
        setEditSelectedRow(null);
    };

    const openAddEditPostModal = () => {
        if (editSelectedRow) {
            setToggleAddEditPostModal(true);
        }
    };

    useEffect(getPosts, []);
    useEffect(openAddEditPostModal, [editSelectedRow]);

    return (
        <>
            <TableLayoutWrapper title={t('posts')} button={
                <button className="bg-green-600 text-white text-sm py-3 px-10 font-bold focus:outline-none rounded"
                        onClick={() => setToggleAddEditPostModal(true)}>
                    {t('addPost')}
                </button>
            }>
                <Table
                    size="small"
                    scroll={{x: 700}}
                    dataSource={posts}
                    loading={loading}
                    columns={columns}
                    showSorterTooltip={false}
                    pagination={false}
                />
            </TableLayoutWrapper>
            {toggleAddEditPostModal && (
                <AddEditPostModal editSelectedRow={editSelectedRow} closeDialog={handleCloseAddEditModal}/>
            )}
        </>
    );
}

export default Posts;

