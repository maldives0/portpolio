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
const { Paragraph, Link
} = Typography;
const validateMessages = {
    required: '${placeholder} is required!',
    types: {
        email: '${placeholder} is not a valid email!',
        number: '${placeholder} is not a valid number!',
    },
    number: {
        range: '${placeholder} must be between ${min} and ${max}',
    },
};
const data = [
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
    const [visible, setVisible] = useState(false);

    const showDrawer = useCallback(() => {
        setVisible(true);
    });

    const onCloseDrawer = useCallback(() => {
        setVisible(false);
    });
    const onFinish = (values) => {
        console.log(values);
    };

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
                        xl: 6,
                        gutter: 8
                    }}
                    itemLayout="horizontal"
                    dataSource={data}
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
                    drawerStyle={{ width: '300px' }}
                >
                    <FormStyle>
                        <Form wrapperCol={{ span: 20, }} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                            <Form.Item>
                                <Input
                                    required
                                    placeholder="당신의 성함을 알려주세요" />
                            </Form.Item>
                            <Form.Item
                                rules={[
                                    {
                                        type: 'email',
                                    },
                                ]}
                            >
                                <Input
                                    required
                                    placeholder="이 이메일로 답장을 보낼게요" />
                            </Form.Item>
                            <Form.Item
                            >
                                <Input.TextArea
                                    required
                                    placeholder="하시고 싶은 말씀을 적어주세요"
                                    style={{
                                        width: '300px',

                                        height: '200px'
                                    }} />
                            </Form.Item>
                            <Form.Item wrapperCol={{ span: 20, offset: 8 }}>
                                <Button type="primary" htmlType="submit">
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