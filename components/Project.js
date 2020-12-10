import React, { useState, useCallback } from 'react';
import {
    Typography, Card, Modal
    , Row, List, Descriptions
} from 'antd';
import Image from 'next/image';
import { ProjectLayout } from './style';
const { Title } = Typography;
import projectData from '../assets/data';


const Project = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = useCallback(() => {
        setIsModalVisible(true);
    }, []);



    const handleCancel = useCallback(() => {
        setIsModalVisible(false);
    }, []);
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
                            md: 3,
                            xl: 6,
                            gutter: 8
                        }}
                        dataSource={projectData}
                        itemLayout="horizontal"
                        renderItem={(item) => (
                            <List.Item>
                                <Card
                                    hoverable
                                    onClick={showModal}
                                    cover={<Image
                                        src={item.img}
                                        alt={item.key}
                                        width={100} height={150}
                                    />} >
                                    <Card.Meta title={item.title}
                                        description={item.desc}
                                    />
                                </Card>
                                <Modal
                                    onCancel={handleCancel}

                                    footer={null}
                                    title={item.title}
                                    visible={isModalVisible}  >
                                    <Descriptions >
                                        <Descriptions.Item label="Term">{item.term}</Descriptions.Item>
                                        <Descriptions.Item label="Using Skills">{item.skills}</Descriptions.Item>
                                        <Descriptions.Item label="func">{item.func}</Descriptions.Item>

                                    </Descriptions>
                                </Modal>

                            </List.Item>
                        )}
                    />
                </Row>
            </div>
        </>

    );
}
export default Project;