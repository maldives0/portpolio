import React from 'react';
import { Typography, List, Card, Row } from 'antd';
import { default as EnvironmentOutlined } from '@ant-design/icons/EnvironmentOutlined';
import { default as PhoneOutlined } from '@ant-design/icons/PhoneOutlined';
import { default as GithubOutlined } from '@ant-design/icons/GithubOutlined';
import { default as CoffeeOutlined } from '@ant-design/icons/CoffeeOutlined';
import { default as MailOutlined } from '@ant-design/icons/MailOutlined';
import { ContactLayout, ContactFlex } from './style';
const { Paragraph, Link, Title } = Typography;
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
            <Link href="https://github.com/maldives0" target="_blank" prefetch="false">
                https://github.com/maldives0
    </Link>
        </Paragraph>
    },
    {
        title: <CoffeeOutlined />,
        content: <Paragraph copyable={{ tooltips: false, text: 'https://maldives0.github.io' }}>
            <Link href="https://maldives0.github.io" target="_blank" prefetch="false">
                https://maldives0.github.io/
</Link>
        </Paragraph>

    },
];

const Contact = () => {

    return (
        <ContactFlex data-aos-anchor="#trigger-contact">
            <ContactLayout />
            <Row xs={16} sm={12} md={8} style={{ marginBottom: 50, textAlign: 'center' }}>
                <Title
                    data-aos="fade-up"
                    data-aos-duration="2000"  >Let's make something great together!
                </Title>
            </Row>
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
        </ContactFlex>
    );
};
export default Contact;