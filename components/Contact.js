import React, { useState, useCallback } from 'react';
import { Typography, List, Card, Form, Input, Drawer, Button, message } from 'antd';
import {
    default as EnvironmentOutlined,
} from '@ant-design/icons/EnvironmentOutlined';
import {
    default as PhoneOutlined,
} from '@ant-design/icons/PhoneOutlined';
import {
    default as GithubOutlined,
} from '@ant-design/icons/GithubOutlined';
import {
    default as CoffeeOutlined,
} from '@ant-design/icons/CoffeeOutlined';
import {
    default as MailOutlined,
} from '@ant-design/icons/MailOutlined';

import { FormStyle, ContactLayout, ContactFlex } from './style';
import useInput from '../hooks/useInput';
import backUrl from '../config/url';
import axios from 'axios';
const { Paragraph, Link
} = Typography;


const contactData = [
    {
        title: <EnvironmentOutlined />,
        content: <Paragraph>서울특별시 강동구 상암로</Paragraph>
    },
    {
        title: <PhoneOutlined />,
        content: <Paragraph copyable={{ tooltips: false, text: '+82 010-5500-2288' }}>+82 010-5500-2288</Paragraph>
    },
    {
        title: <MailOutlined />,
        content: <Paragraph copyable={{ tooltips: false, text: 'maliethy@gmail.com' }}>maliethy@gmail.com</Paragraph>
    },
    {
        title: <GithubOutlined />,
        content: <Paragraph copyable={{ tooltips: false, text: 'https://github.com/maldives0' }}>
            <Link href="https://github.com/maldives0" target="_blank">
                https://github.com/maldives0
    </Link>
        </Paragraph>
    },
    {
        title: <CoffeeOutlined />,
        content: <Paragraph copyable={{ tooltips: false, text: 'https://maldives0.github.io/' }}>
            <Link href="https://maldives0.github.io/" target="_blank">
                https://maldives0.github.io/
</Link>
        </Paragraph>

    },
];
const validateMessages = {
    required: '${name}을 적어주세요!',
    types: {
        email: '${name} 이메일 형식에 맞지 않습니다!',
    },
};
const Contact = () => {

    const [visible, setVisible] = useState(false);
    const [nameValue, onChangeName, setNameValue] = useInput('');
    const [emailValue, onChangeEmail, setEmailValue] = useInput('');
    const [messageValue, onChangeMessage, setMessageValue] = useInput('');
    const showDrawer = useCallback(() => {
        setVisible(true);
    });
    const onCloseDrawer = useCallback(() => {
        setVisible(false);
    });

    const onSubmit = useCallback(async () => {

        try {
            if (!nameValue || !nameValue.trim()) {
                return alert('성함을 작성한 후 버튼을 누르세요.');
            }
            if (!emailValue || !emailValue.trim()) {
                return alert('이메일을 작성한 후 버튼을 누르세요.');
            }
            if (!messageValue || !messageValue.trim()) {
                return alert('메세지를 작성한 후 버튼을 누르세요.');
            }

            const newMsg = { name: nameValue, email: emailValue, message: messageValue };
            await axios.post(`${backUrl}/api/messages`, newMsg, { withCredentials: true });
            setNameValue('');
            setEmailValue('');
            setMessageValue('');
            setVisible(false);
            message.success('빠른 시일 내에 확인 후 연락드리겠습니다!');

        } catch (err) {
            console.error(err);
        }
    }, [nameValue, emailValue, messageValue]);

    return (
        <ContactFlex data-aos-anchor="#trigger-contact"
        >
            <ContactLayout />
            <div className="contact-list-style" data-aos="fade-up" >
                <List
                    grid={{
                        xs: 2,
                        sm: 2,
                        md: 3,
                        xl: 3,
                        gutter: 8
                    }}
                    itemLayout="horizontal"
                    dataSource={contactData}
                    renderItem={item => (
                        <List.Item>
                            <Card title={item.title}>{item.content}</Card>
                        </List.Item>
                    )}
                />
            </div>

            <div className="site-drawer-render-in-current-wrapper">
                하고 싶은 말씀이 있으신가요?
            <div className="message-button-display">
                    <Button type="primary" onClick={showDrawer}>
                        Send Message
          </Button>
                </div>
                <Drawer
                    title="메세지 보내기"
                    placement="right"
                    closable={true}
                    onClose={onCloseDrawer}
                    visible={visible}
                    getContainer={false}
                    style={{ position: 'absolute' }}
                    drawerStyle={{ width: '500px' }}
                >
                    <FormStyle>
                        <Form
                            validateMessages={validateMessages}
                            wrapperCol={{ span: 20 }} name="nest-messages"
                            onFinish={onSubmit} >
                            <Form.Item
                                name="이름"
                                rules={[
                                    { required: true, },
                                ]}>
                                <Input
                                    onChange={onChangeName}
                                    value={nameValue}
                                    required
                                    placeholder="당신의 성함을 알려주세요"

                                />
                            </Form.Item>
                            <Form.Item
                                name="email"
                                rules={[
                                    { type: 'email', },
                                    { required: true, },
                                ]}
                            >
                                <Input
                                    onChange={onChangeEmail}
                                    value={emailValue}
                                    required
                                    placeholder="이곳에 적어주신 이메일로 답장을 보낼게요"

                                />
                            </Form.Item>
                            <Form.Item
                                name="message"
                                rules={[
                                    { required: true, },
                                ]}
                            >
                                <Input.TextArea
                                    onChange={onChangeMessage}
                                    value={messageValue}
                                    required
                                    placeholder="저에게 하시고 싶은 말씀을 적어주세요"

                                />
                            </Form.Item>
                            <Form.Item wrapperCol={{ span: 20, offset: 8 }}>
                                <Button
                                    type="primary" htmlType="submit">
                                    보내기
            </Button>
                            </Form.Item>
                        </Form>
                    </FormStyle>
                </Drawer>
            </div>
        </ContactFlex>

    );
};
export default Contact;