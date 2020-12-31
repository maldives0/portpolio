import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Typography, Space, Row, Tooltip } from 'antd';

import {
    default as BulbOutlined,
} from '@ant-design/icons/BulbOutlined';
import {
    default as UserOutlined,
} from '@ant-design/icons/UserOutlined';
import {
    default as AppstoreAddOutlined,
} from '@ant-design/icons/AppstoreAddOutlined';
import {
    default as BankOutlined,
} from '@ant-design/icons/BankOutlined';
import {
    default as FormOutlined,
} from '@ant-design/icons/FormOutlined';
import {
    default as MailOutlined,
} from '@ant-design/icons/MailOutlined';
import {
    default as HomeOutlined,
} from '@ant-design/icons/HomeOutlined';
import {
    default as MinusCircleTwoTone,
} from '@ant-design/icons/MinusCircleTwoTone';
import {
    default as PlusCircleTwoTone,
} from '@ant-design/icons/PlusCircleTwoTone';

import { GlobalLayout, Logo, } from './style';
import Image from 'next/image';
import { FullPage } from 'react-full-page';
import { useMediaQuery } from "react-responsive";

const { Header, Sider, Footer, Content } = Layout;
const { Text } = Typography;
const collapsedStyle = {
    position: 'fixed', top: 60, width: 150, zIndex: 100, left: '14px', border: 'none',
};
const basicStyle = {
    position: 'fixed', bottom: '15%', left: 0, width: 200, zIndex: 100,
};

const CustomControls = (collapsed, setCollapsed) => ({ getCurrentSlideIndex, scrollToSlide }) => {
    const currentSlideIndex = getCurrentSlideIndex();
    const onClickMenu = useCallback((e) => {
        scrollToSlide(e.key - 1);
    }, []);
    const [currentStyle, setCurrentStyle] = useState(basicStyle);
    const isTabletPC = useMediaQuery({ query: "(min-width: 768px) " });

    useEffect(() => {
        if (!isTabletPC) {
            setCurrentStyle({
                display: 'none',
            });
        } else {
            setCurrentStyle(basicStyle);
            setCollapsed(false);
        }
    }, [isTabletPC]);
    return (
        <>
            <Menu theme="light" mode="inline"
                selectedKeys={[`${currentSlideIndex + 1}`]}
                onClick={onClickMenu}
                style={collapsed ? collapsedStyle : currentStyle}
            >
                <Menu.Item key="1" icon={
                    <HomeOutlined />}>
                    Home
                </Menu.Item>
                <Menu.Item key="2" icon={
                    <UserOutlined />}>
                    About
                </Menu.Item>
                <Menu.Item key="3" icon={
                    <AppstoreAddOutlined />}>
                    Tech Skills
                </Menu.Item>
                <Menu.Item key="4" icon={
                    <BulbOutlined />
                }>
                    Project
                </Menu.Item>
                <Menu.Item key="5" icon={
                    <FormOutlined />
                }>
                    Experience
                </Menu.Item>
                <Menu.Item key="6" icon={
                    <BankOutlined />}>
                    Education
                </Menu.Item>
                <Menu.Item key="7" icon={
                    <MailOutlined />
                }>
                    Contact
                </Menu.Item>
            </Menu>
        </>
    );
};
const AppLayout = ({ children }) => {
    const isTabletPC = useMediaQuery({ query: "(min-width: 768px)" });
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = useCallback(() => {
        setCollapsed((prev) => !prev);
    }, []);

    return (
        <>
            {isTabletPC ? (
                <Layout className="layout">
                    <GlobalLayout />
                    <Sider
                        collapsible
                        collapsed={collapsed}
                        trigger={null}
                        className="sider-layout">
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
                                    controls={CustomControls(collapsed, setCollapsed)}
                                >
                                    {children}
                                </FullPage>
                            </div>
                        </Content>
                        <Footer>
                            <p>Juyoung's Portpolio ©2020 Created by Juyoung Jung</p></Footer>
                    </Layout>
                </Layout>
            ) : (
                    <Layout className="layout">
                        <GlobalLayout />
                        <Header className="layout-background">
                            <Tooltip
                                placement="right"
                                title={collapsed ? "메뉴 감추기" : "메뉴 보기"}
                                className="menufold-layout">
                                {React.createElement(collapsed ? MinusCircleTwoTone : PlusCircleTwoTone, {
                                    className: 'trigger',
                                    onClick: toggleCollapsed,
                                })}
                            </Tooltip>
                        </Header>
                        <Content>
                            <div>
                                <FullPage
                                    controls={CustomControls(collapsed, setCollapsed)}
                                >
                                    {children}
                                </FullPage>
                            </div>
                        </Content>
                        <Footer>
                            <p>Juyoung's Portpolio ©2020 Created by Juyoung Jung</p></Footer>
                    </Layout>
                )}
        </>
    );
};
AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default AppLayout;