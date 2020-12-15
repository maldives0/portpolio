import React, { useState, useCallback, useEffect } from 'react';

import { Form, Input, Button, } from 'antd';
import AppLayout from '../components/AppLayout';
import MessageList from '../components/MessageList';
import useInput from '../hooks/useInput';
import { LockOutlined } from '@ant-design/icons';
import { SlideStyle } from '../components/style';
import { backUrl } from '../config/url';
import axios from 'axios';
import useSWR, { mutate, trigger } from 'swr';

const fetcher = (url) => axios.post(url, { withCredentials: true }).then((result) => result.data);
const Admin = () => {
    const [showList, setShowList] = useState(false);
    const [password, onChangePassword] = useInput('');

    const url = `${backUrl}/admin/${password}/`;
    const { data, error } = useSWR(url, fetcher, { dedupingInterval: 5000 });
    const onSubmitForm = useCallback(async () => {
        mutate(url, await fetcher(url, axios.post(url, { withCredentials: true })));
        if (data === password) {
            setShowList(true);
        } else {
            alert('관리자만 접근할 수 있는 페이지입니다!');
            console.error(error);
        }

    }, [password]);


    return (
        <AppLayout>
            <SlideStyle className="basic-layout-background">

                {showList ? (<MessageList setShowList={setShowList} />) : (
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