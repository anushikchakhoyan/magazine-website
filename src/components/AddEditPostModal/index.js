import PropTypes from 'prop-types';
import {useTranslation} from 'react-i18next';
import React, {useEffect, useState} from 'react';
import {Modal, Button, Form, Input, Space, message} from 'antd';

import PostsService from "../../services/api/posts";
import I18n from '../../I18n/config';

const {Item, useForm} = Form;
const {TextArea} = Input;

const AddEditPostModal = ({editSelectedRow, closeDialog}) => {
    const {t} = useTranslation();
    const [postForm] = useForm();
    const [loading, setLoading] = useState(false);
    const [body, setBody] = useState('');

    const handleSubmit = data => {
        postForm.validateFields().then(() => {
            if (editSelectedRow) {
                editPost(data);
            } else {
                addPost(data);
            }
        });
    };

    const editPost = data => {
        setLoading(true);
        PostsService.editPost(editSelectedRow.id, data)
            .then(() => {
                message.success(I18n.t('messages.post_updated'));
                closeDialog({payload: {edit: true, value: {...data, body} }});
            })
            .finally(() => setLoading(false));
    };

    const addPost = data => {
        setLoading(true);
        PostsService.addPost(data)
            .then(() => {
                message.success(I18n.t('messages.post_created'));
                closeDialog({payload: {value: {...data, body} }});
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false));
    };

    const setData = () => {
        if (editSelectedRow) {
            setBody(editSelectedRow.body)
        }
    };

    const validateMessages = {
        required: t('validation.required')
    };

    useEffect(setData, [editSelectedRow]);

    return (
        <Modal
            footer={null}
            width="600px"
            visible={true}
            maskClosable={false}
            onCancel={() => closeDialog()}
            title={editSelectedRow ? t('editPost') : t('addPost')}
        >
            <div className="px-6">
                <Form
                    layout="vertical"
                    form={postForm}
                    onFinish={handleSubmit}
                    initialValues={{
                        ...editSelectedRow
                    }}
                    validateMessages={validateMessages}
                >
                    <Item name="title" label={t('title')} rules={[{required: true}]}>
                        <Input name="title" placeholder={t('title')}/>
                    </Item>
                    <Item name="body" label={t('body')} rules={[{required: true}]}>
                        <TextArea name="body" rows={4} placeholder={t('body')} value={body} onChange={e => setBody(e.target.value)}/>
                    </Item>
                    <Space className="flex justify-end items-center">
                        <Button loading={loading}
                                onClick={() =>
                                    handleSubmit({...postForm.getFieldsValue()})
                                }>{t('auth.save')}</Button>
                        <Button onClick={() => closeDialog()}>{t('cancel')}</Button>
                    </Space>
                </Form>
            </div>
        </Modal>
    );
};

AddEditPostModal.propTypes = {
    closeDialog: PropTypes.func,
    editSelectedRow: PropTypes.shape({
        id: PropTypes.number,
        body: PropTypes.string,
        title: PropTypes.string
    })
};

export default AddEditPostModal;
