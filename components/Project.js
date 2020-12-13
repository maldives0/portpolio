import React, { useState, useCallback, useEffect } from 'react';
import {
    Typography, Card, Row, List, Descriptions, Button, Modal
} from 'antd';
import { GithubOutlined, SelectOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { ProjectLayout } from './style';
const { Title, Link } = Typography;
import projectData from '../assets/projectData';

const Project = () => {
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
                <Row gutter={[16, 16]} justify="space-around" >

                    <List
                        grid={{
                            xs: 2,
                            sm: 2,
                            md: 2,
                            lg: 4,
                            xl: 4,
                            gutter: 8
                        }}
                        dataSource={projectData}
                        itemLayout="horizontal"
                        renderItem={(item) => (
                            <List.Item>
                                <Card
                                    hoverable
                                    onClick={toggleModal(item.key)}
                                    cover={<Image
                                        src={item.img}
                                        alt={item.key}
                                        width={100} height={200}
                                    />} >
                                    <Card.Meta title={item.title}
                                        description={item.desc}
                                    />

                                </Card>

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
                                <Link href={seletedData.live} target="_blank">
                                    <SelectOutlined style={{ marginRight: 2 }} />
                                    바로가기</Link>
                            </Button>,
                            <Button key="github" type="primary">
                                <Link href={seletedData.git} target="_blank">
                                    <GithubOutlined style={{ marginRight: 2 }} />
                                    코드보기</Link>
                            </Button>

                        ]}
                        title={seletedData.title}
                        visible={isModalVisible}  >
                        <div className="modal-image-style">
                            <Image
                                src={seletedData.img}
                                alt={seletedData.key}
                                width={300}
                                height={450}
                            />
                        </div>
                        <Descriptions
                            bordered={true}
                            column={{ xs: 2, sm: 2, md: 1 }}
                        >
                            <Descriptions.Item label="Term">{seletedData.term}</Descriptions.Item>
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