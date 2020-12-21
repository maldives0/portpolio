import React, { useState, useCallback } from 'react';
import {
    Typography, Card, Row, Col, List, Descriptions, Button, Modal,
} from 'antd';
import {
    default as GithubOutlined,
} from '@ant-design/icons/GithubOutlined';
import {
    default as SelectOutlined,
} from '@ant-design/icons/SelectOutlined';
import Image from 'next/image';
import { ProjectLayout } from './style';
const { Link, Title } = Typography;
import projectData from '../assets/projectData';
import { useMediaQuery } from "react-responsive";
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
            >
                <ProjectLayout />
                <Row justify={isTabletPC ? "space-around" : "center"}>
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
                                            level={4}>{item.title}</Title>)}

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
                                    prefetch={false}
                                    href={seletedData.live} target="_blank">
                                    <SelectOutlined style={{ marginRight: 2 }} />
                                    바로가기</Link>
                            </Button>,
                            <Button key="github" type="primary">
                                <Link
                                    prefetch={false}
                                    href={seletedData.git} target="_blank">
                                    <GithubOutlined style={{ marginRight: 2 }} />
                                    코드보기</Link>
                            </Button>

                        ]}
                        title={seletedData.title}
                        visible={isModalVisible} >
                        {isTabletPC ? (<div className="modal-image-style">
                            <Image
                                src={seletedData.img}
                                alt={seletedData.key}
                                width={300}
                                height={450}
                            />
                        </div>) : null}

                        <Descriptions
                            layout={"vertical"}
                            bordered={true}
                            size={"small"}
                            column={{ xs: 1, sm: 2, md: 1 }}
                        >
                            <Descriptions.Item label="Term" span={2}>{seletedData.term}</Descriptions.Item>
                            <Descriptions.Item label="Using Skills">{seletedData.skills}</Descriptions.Item>
                            <Descriptions.Item label="func">{seletedData.func}</Descriptions.Item>
                            <Descriptions.Item label="detailed description">{seletedData.details}</Descriptions.Item>
                        </Descriptions>
                    </Modal>

                </>
            </div>
        </>

    );
}
export default Project;