import React, { useCallback } from 'react';
import { Form, Input, Button, Row, } from 'antd';
import { useRouter } from 'next/router';
import useInput from '../hooks/useInput';
import { LockOutlined } from '@ant-design/icons';
const dotenv = require('dotenv');
dotenv.config();

const LoginForm = () => {
    const Router = useRouter();
    const [password, onChangePassword] = useInput('');

    const onSubmitForm = useCallback(() => {
        if (password !== process.env.ADMIN_PASSWORD) {
            alert('관리자만 접근할 수 있습니다!');
        } else {
            Router.replace('/admin');
        }
    }, [password]);


    return (
        <Form
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onSubmitForm}
        >
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={onChangePassword}
                />
            </Form.Item>

            <Form.Item >
                <Row >
                    <Button type="primary" htmlType="submit"
                    >
                        로그인
            </Button>

                </Row>
            </Form.Item>

        </Form>
    );


};
export default LoginForm;