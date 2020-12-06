import React, { useRef } from 'react';

import PropTypes from 'prop-types';
import { Layout, Menu, Typography, Space, Row, Col } from 'antd';
import {
    BulbOutlined,
    UserOutlined,
    AppstoreAddOutlined,
    BankOutlined,
    FormOutlined,
    MailOutlined,
    HomeOutlined
} from '@ant-design/icons';
import { GlobalLayout, Logo } from './style';
import Link from 'next/link';
import Image from 'next/image';
import { FullPage, Slide } from 'react-full-page';


const { Sider, Footer, Content } = Layout;
const { Text } = Typography;
const AppLayout = ({ children }) => {

    const fullPageRef = useRef();

    return (
        <Layout>
            <GlobalLayout />
            <Sider
                className="site-layout-background"
                style={{
                    overflow: 'auto',
                    width: '300px',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                }}
            >
                <Logo>
                    <Image
                        src="/img/profile-me.jpg"
                        alt="profile"
                        width={150}
                        height={150}
                    />
                    <Space direction="vertical">
                        <Text type="secondary">Juyoung Jung</Text>
                        <Text strong>Front-End Developer</Text>
                    </Space>
                </Logo>
                <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<HomeOutlined />}>
                        <Link href="/"><a>Home</a></Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UserOutlined />}>
                        <Link href="/about"><a>About</a></Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<AppstoreAddOutlined />}>
                        <Link href="/skill"><a>Tech Skills</a></Link>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<BulbOutlined />}>
                        Project
        </Menu.Item>
                    <Menu.Item key="5" icon={<FormOutlined />}>
                        Experience
        </Menu.Item>
                    <Menu.Item key="6" icon={<BankOutlined />}>
                        Education
        </Menu.Item>
                    <Menu.Item key="7" icon={<MailOutlined />}>
                        Contact
        </Menu.Item>
                </Menu>
            </Sider>
            <Layout>

                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div style={{ padding: 24, minHeight: 1000 }}>
                        <FullPage controls={CustomControls}>
                            <Slide>
                                {children}
                            </Slide>
                        </FullPage>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Juyoung's Portpolio ©2020 Created by Juyoung Jung</Footer>
            </Layout>
        </Layout>


    );
};
AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default AppLayout;
