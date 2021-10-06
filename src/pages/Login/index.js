import {Form, Input} from "antd";
import {isEmpty} from "lodash-es";
import PropTypes from "prop-types";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {Redirect, useHistory} from "react-router-dom";
import {EyeInvisibleOutlined, EyeTwoTone, LockOutlined, UserOutlined} from "@ant-design/icons";

import {setToken, setUser} from "../../helpers/storage.helper";

const {Item, useForm} = Form;
const token = 'yJuYW1lIjoidGVzdCIsImFsZyI6IkhTMjU2In0.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.FB_vRkoiQx8PQhKiPECYDFuNzy4O2S-5KfPsEumirjY';

const Login = ({location}) => {
    const {t} = useTranslation();
    const [authForm] = useForm();
    const history = useHistory();
    const [submitLoading, setSubmitLoading] = useState(false);

    const handleSubmit = user => {
        authForm.validateFields().then(() => {
            setToken(token);
            setSubmitLoading(true);
            if (!isEmpty(user) && !isEmpty(token)) {
                setUser(user);
                if (location.state && location.state.from) {
                    return history.push(location.state.from);
                } else {
                    return history.push('/users');
                }
            } else {
               return <Redirect to='/login' />
            }
        });
        setSubmitLoading(false)
    };

    const validateMessages = {
        required: t('validation.required')
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="flex max-w-7xl w-full min-h-screen md:min-h-800 shadow-lg">
                <div className="w-1/2 rounded-tl-md rounded-bl-md  bg-cover hidden md:block auth-background"/>
                <div className="flex justify-center items-center flex-col flex-none w-full md:flex-1 bg-white rounded-tr-md rounded-br-md">
                    <h1 className="text-green-600 pt-16 text-4xl font-black text-center">{t('appName')}</h1>
                    <p className="text-xl pb-8">{t('singIn')}</p>
                    <Form
                        layout="vertical"
                        form={authForm}
                        onFinish={handleSubmit}
                        initialValues={{
                            username: '',
                            password: ''
                        }}
                        validateMessages={validateMessages}
                        className="px-2 lg:px-8 w-4/5"
                    >
                        <Item name="username" rules={[{required: true}]} className="mb-3">
                            <Input name="username" placeholder={t('auth.username')} prefix={<UserOutlined />} size="large"/>
                        </Item>
                        <Item name="password" rules={[{required: true}]} className="auth-field">
                            <Input.Password
                                name="password"
                                size="large"
                                prefix={<LockOutlined />}
                                placeholder={t('auth.password')}
                                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                        </Item>
                        <div className="text-center mt-8">
                            <button
                               type="submit"
                                className="bg-green-600 text-white text-md py-3 px-8 md:px-16 lg:px-32 font-bold focus:outline-none rounded"
                            >
                                {submitLoading ? t('auth.wait') : t('login')}
                            </button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

Login.propTypes = {
    location: PropTypes.object
};

export default Login;