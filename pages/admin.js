import React, { useEffect, useState, useCallback } from 'react';
import Proptypes from 'prop-types';
import axios from 'axios';
import useSWR, { mutate, trigger } from 'swr';
import { Form, Input, Button, Row, } from 'antd';
import AppLayout from '../components/AppLayout';
import MessageList from '../components/MessageList';
import useInput from '../hooks/useInput';
import { LockOutlined } from '@ant-design/icons';
import ADMIN_PASSWORD from '../password';
import { SlideStyle } from '../components/style';
const Admin = () => {

    const [password, onChangePassword] = useInput('');
    const [showList, setShowList] = useState(true);

    const onSubmitForm = useCallback(() => {
        if (password !== ADMIN_PASSWORD) {
            alert('관리자만 접근할 수 있습니다!');
        } else {
            setShowList(true);
        }
    }, [password]);


    return (
        <AppLayout>
            <SlideStyle className="basic-layout-background">

                {showList ? (<MessageList />) : (
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
                            <Button type="primary" htmlType="submit"
                            >로그인</Button>
                        </Form.Item>
                    </Form>
                )
                }
            </SlideStyle>
        </AppLayout>
    );


};
export default Admin;