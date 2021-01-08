import React, { useState, useCallback } from 'react';
import { Typography, Card, Row, Col, List, Descriptions, Button, Modal, } from 'antd';
import { default as GithubOutlined } from '@ant-design/icons/GithubOutlined';
import { default as SelectOutlined } from '@ant-design/icons/SelectOutlined';
import { ProjectLayout } from './style';
import { default as CoffeeOutlined } from '@ant-design/icons/CoffeeOutlined';
import projectData from '../assets/projectData';
import { useMediaQuery } from "react-responsive";
import Image from 'next/image';

const { Link, Title, } = Typography;
const Project = () => {
    const isTabletPC = useMediaQuery({ query: "(min-width: 768px)" });
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalKey, setModalKey] = useState('daon');
    const toggleModal = useCallback((key) => () => {
        setIsModalVisible(true);
        setModalKey(key);
    }, []);
    const handleCancel = useCallback(() => {
        setIsModalVisible(false);
    }, []);
    const seletedData = projectData.find(v => v.key === modalKey);
    return (
        <>
            <div data-aos="fade-down"
                data-aos-delay="200"
                data-aos-anchor="#trigger-project"
            >
                <ProjectLayout />
                <Row justify={isTabletPC ? "space-around" : "center"} >
                    <List
                        grid={{
                            xs: 2,
                            sm: 2,
                            md: 2,
                            lg: 4,
                            xl: 4,
                            gutter: [8, 8],
                        }}
                        dataSource={projectData}
                        itemLayout="horizontal"
                        renderItem={(item) => (
                            <List.Item>
                                <Col>
                                    <Card
                                        hoverable
                                        onClick={toggleModal(item.key)}
                                        cover={<Image
                                            src={item.img}
                                            alt={item.key}
                                            width={70} height={120}
                                        />} >
                                        {isTabletPC ? (<Card.Meta title={item.title}
                                            description={item.desc}
                                        />) : (<Title
                                            level={5}>{item.title}</Title>)}
                                    </Card>
                                </Col>
                            </List.Item>
                        )}
                    />
                </Row>
                <>
                    <Modal
                        width={1000}
                        height={1000}
                        bodyStyle={
                            { display: 'flex' }
                        }
                        onCancel={handleCancel}
                        footer={[
                            <Button key="live">
                                <Link
                                    prefetch="false"
                                    href={seletedData.live} target="_blank">
                                    <SelectOutlined style={{ marginRight: 2 }} />
                                    바로가기</Link>
                            </Button>,
                            <Button key="github" type="primary">
                                <Link
                                    prefetch="false"
                                    href={seletedData.git} target="_blank">
                                    <GithubOutlined style={{ marginRight: 2 }} />
                                    코드보기</Link>
                            </Button>

                        ]}
                        title={seletedData.title}
                        visible={isModalVisible} >
                        {isTabletPC ? (<div className="modal-image-style">
                            <Image
                                src={seletedData.Image}
                                alt={seletedData.key}
                                width={300}
                                height={450}
                            />
                        </div>) : null}
                        <Descriptions
                            layout={"vertical"}
                            bordered={true}
                            size={"small"}
                            column={{ xs: 2, sm: 2, md: 1 }}
                        >
                            <Descriptions.Item label="Term">{seletedData.term}</Descriptions.Item>
                            <Descriptions.Item label="Using Skills">{seletedData.skills}</Descriptions.Item>
                            <Descriptions.Item label="func">{seletedData.func}</Descriptions.Item>
                            <Descriptions.Item label="detailed description">{seletedData.details}</Descriptions.Item>
                        </Descriptions>
                    </Modal>
                </>
                <Row xs={16} sm={12} md={8} className="project-title-layout">
                    <Title
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        level={5}
                    >이와 같은 프로젝트를 만들며 제가 공부했던 과정이 궁금하시다면 저의  개인 블로그에 놀러와주세요~
                </Title>
                </Row>
                <Row >
                    <Button
                        type="primary"
                        key="blog" className="blog-button-layout" >
                        <Link href="https://maldives0.github.io" target="_blank" prefetch="false"> 블로그 놀러가기<CoffeeOutlined />
                        </Link>
                    </Button>
                </Row>
            </div>
        </>
    );
}
export default Project;