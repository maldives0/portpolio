import React, { useState, useCallback } from 'react';
import { Typography, List, Card, Form, Input, Drawer, Button } from 'antd';
import {
    EnvironmentOutlined,
    PhoneOutlined,
    GithubOutlined,
    CoffeeOutlined,
    MailOutlined
} from '@ant-design/icons';
import { FormStyle, ContactLayout, ContactFlex } from './style';
import useInput from '../hooks/useInput';
import useSWR from 'swr';
import axios from 'axios';
const { Paragraph, Link
} = Typography;


const contactData = [
    {
        title: <EnvironmentOutlined />,
        content: <Paragraph copyable={{ tooltips: false }}>서울특별시 강동구 상암로</Paragraph>
    },
    {
        title: <PhoneOutlined />,
        content: <Paragraph copyable={{ tooltips: false }}>+82 010-5500-2288</Paragraph>
    },
    {
        title: <MailOutlined />,
        content: <Paragraph copyable={{ tooltips: false }}>maliethy@gmail.com</Paragraph>
    },
    {
        title: <GithubOutlined />,
        content: <Paragraph copyable={{ tooltips: false }}>
            <Link href="https://github.com/maldives0" target="_blank">
                https://github.com/maldives0
    </Link>
        </Paragraph>
    },
    {
        title: <CoffeeOutlined />,
        content: <Paragraph copyable={{ tooltips: false }}>
            <Link href="https://maldives0.github.io/" target="_blank">
                https://maldives0.github.io/
</Link>
        </Paragraph>

    },
];

const Contact = () => {
    const { data } = useSWR('/messages');
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

            await axios.post('/messages', { id: data[length - 1].id + 1, key: data[length - 1].key + 1, name: nameValue, email: emailValue, message: messageValue });
            setNameValue('');
            setEmailValue('');
            setMessageValue('');
            setVisible(false);

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
                            wrapperCol={{ span: 20 }} name="nest-messages"
                            onFinish={onSubmit} >
                            <Form.Item>
                                <Input
                                    onChange={onChangeName}
                                    value={nameValue}
                                    required
                                    placeholder="당신의 성함을 알려주세요"

                                />
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    onChange={onChangeEmail}
                                    value={emailValue}
                                    required
                                    placeholder="이곳에 적어주신 이메일로 답장을 보낼게요"

                                />
                            </Form.Item>
                            <Form.Item>
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