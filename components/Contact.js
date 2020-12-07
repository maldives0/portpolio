import React, { useState, useCallback } from 'react';
import { List, Card, Form, Input, Drawer, Button } from 'antd';
import { FormStyle } from './style';
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
        title: 'Title 1',
    },
    {
        title: 'Title 2',
    },
    {
        title: 'Title 3',
    },
    {
        title: 'Title 4',
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
        <>
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <Card title={item.title}>Card content</Card>
                    </List.Item>
                )}
            />
            <div className="site-drawer-render-in-current-wrapper">
                하고 싶은 말씀이 있으신가요?
            <div style={{ marginTop: 16 }}>
                    <Button type="primary" onClick={showDrawer}>
                        Message
          </Button>
                </div>
                <Drawer
                    title="Basic Drawer"
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
                                    style={{ height: '200px' }} />
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
        </>
    );
};
export default Contact;