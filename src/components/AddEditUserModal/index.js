import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Modal, Button, Form, Input, Space, message} from 'antd';

import UserService from "../../services/api/users";
import I18n from '../../I18n/config';

const {Item, useForm} = Form;

const AddEditUserModal = ({editSelectedRow, closeDialog}) => {
    const {t} = useTranslation();
    const [userForm] = useForm();
    const [loading, setLoading] = useState(false);

    const handleSubmit = data => {
        userForm.validateFields().then(() => {
            if (editSelectedRow) {
                editUser(data);
            } else {
                addUser(data);
            }
        });
    };

    const editUser = data => {
        setLoading(true);
        UserService.editUser(editSelectedRow.id, data)
            .then(() => {
                message.success(I18n.t('messages.user_updated'));
                closeDialog({options: {edit: true, value: data}});
            })
            .finally(() => setLoading(false));
    };

    const addUser = data => {
        setLoading(true);
        UserService.addUser(data)
            .then(() => {
                message.success(I18n.t('messages.user_created'));
                closeDialog({options: {value: data}});
            })
            .catch(e => {
                console.log(e);
            })
            .finally(() => setLoading(false));
    };

    const validateMessages = {
        required: t('validation.required')
    };

    return (
        <Modal
            footer={null}
            width="600px"
            visible={true}
            maskClosable={false}
            onCancel={() => closeDialog()}
            title={editSelectedRow ? t('editUser') : t('addUser')}
        >
            <div className="px-6">
                <Form
                    layout="vertical"
                    form={userForm}
                    onFinish={handleSubmit}
                    initialValues={{
                        ...editSelectedRow,
                    }}
                    validateMessages={validateMessages}
                >
                    <Item name="name" label={t('name')} rules={[{required: true}]}>
                        <Input name="name" placeholder={t('name')}/>
                    </Item>
                    <Item name="username" label={t('auth.username')} rules={[{required: true}]}>
                        <Input name="username" placeholder={t('auth.username')}/>
                    </Item>
                    <Item name="email" label={t('email')} rules={[{required: true, type: 'email'}]}>
                        <Input name="email" type="email" placeholder={t('email')}/>
                    </Item>
                    <Space className="flex justify-end items-center">
                        <Button loading={loading}
                                onClick={() =>
                                    handleSubmit({...userForm.getFieldsValue()})
                                }>{t('save')}</Button>
                        <Button onClick={() => closeDialog()}>{t('cancel')}</Button>
                    </Space>
                </Form>
            </div>
        </Modal>
    );
};

AddEditUserModal.propTypes = {
    closeDialog: PropTypes.func,
    editSelectedRow: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        email: PropTypes.string,
        username: PropTypes.string,
    })
};

export default AddEditUserModal;
