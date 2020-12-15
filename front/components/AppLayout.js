import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Typography, Space, Row, Col } from 'antd';
import {
    BulbOutlined,
    UserOutlined,
    AppstoreAddOutlined,
    BankOutlined,
    FormOutlined,
    MailOutlined,
    HomeOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import { GlobalLayout, Logo, } from './style';
import Image from 'next/image';
import { FullPage } from 'react-full-page';
import Link from 'next/link';
const { Sider, Footer, Content } = Layout;
const { Text } = Typography;

const CustomControls = ({ getCurrentSlideIndex, scrollToSlide }) => {
    const currentSlideIndex = getCurrentSlideIndex();
    const onClickMenu = useCallback((e) => {
        scrollToSlide(e.key - 1);
    }, []);

    return (

        <Menu theme="light" mode="inline"
            selectedKeys={[`${currentSlideIndex + 1}`]}
            onClick={onClickMenu}
            style={{
                position: 'fixed', bottom: '8%', left: 0, width: 150, zIndex: 100,
            }}
        >
            <Menu.Item key="1" icon={<HomeOutlined />}>
                <Link href="/"><a>Home</a></Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
                <Link href="/"><a>About</a></Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<AppstoreAddOutlined />}>
                <Link href="/"><a>Tech Skills</a></Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<BulbOutlined />}>
                <Link href="/"><a>Project</a></Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<FormOutlined />}>
                <Link href="/"><a>Experience</a></Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<BankOutlined />}>
                <Link href="/"><a>Education</a></Link>
            </Menu.Item>
            <Menu.Item key="7" icon={<MailOutlined />}>
                <Link href="/"><a>Contact</a></Link>
            </Menu.Item>
        </Menu>

    );
};
const AppLayout = ({ children }) => {

    return (
        <Layout>
            <GlobalLayout />
            <Sider
                className="site-sider-layout">
                <div style={{ float: 'right' }}>
                    <Link href="/admin"><a><SettingOutlined /></a></Link>
                </div>
                <Logo>
                    <Row gutter={3} style={{ display: 'block' }}>
                        <Image
                            src="/img/profile-me.jpg"
                            alt="profile"
                            width={150}
                            height={150}
                        />
                    </Row>
                    <Row gutter={3}>
                        <Space
                            style={{ fontSize: 13 }}
                            direction="vertical">
                            <>
                                <Text type="secondary">Juyoung Jung</Text>
                                <Text strong>Front-End Developer</Text>
                            </>
                        </Space>
                    </Row>
                </Logo>
            </Sider >
            <Layout style={{ overflow: 'unset' }}>
                <Content>
                    <div>
                        <FullPage
                            controls={CustomControls}
                        >
                            {children}
                        </FullPage>
                    </div>
                </Content>
                <Footer style={{
                    padding: 10,
                    textAlign: 'right', position: 'fixed', bottom: 0, right: '5%'
                }}>Juyoung's Portpolio ©2020 Created by Juyoung Jung</Footer>
            </Layout>
        </Layout>


    );
};
AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default AppLayout;