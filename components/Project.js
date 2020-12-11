import React, { useState, useCallback } from 'react';
import {
    Typography, Card, Modal
    , Row, List, Descriptions,Button,
} from 'antd';
import {GithubOutlined,} from '@ant-design/icons';
import Image from 'next/image';
import { ProjectLayout } from './style';
const { Title,Link } = Typography;
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
                                    onClick={showModal}
                                    cover={<Image
                                        src={item.img}
                                        alt={item.key}
                                        width={100} height={300}
                                    />} >
                                    <Card.Meta title={item.title}
                                        description={item.desc}
                                    />
                                </Card>
                                <Modal
                                    onCancel={handleCancel}
                                    bodyStyle={{ height: '500px' }}
                                    footer={[
            <Button key="live">
              <Link href="https://github.com/maldives0" target="_blank">
                프로젝트 보러가기
    </Link>
                       
            </Button>,
            <Button key="github" type="primary">
             <Link href="https://github.com/maldives0" target="_blank">
               <GithubOutlined /> 코드 보러가기
    </Link>
            </Button>                           
                                  
          ]}
                                    title={item.title}
                                    visible={isModalVisible}  >
                                    <Descriptions
                                        layout="vertical"
                                        column={{ xs: 2, sm: 2, md: 1 }}
                                    >
                                        <Descriptions.Item label="Term">{item.term}</Descriptions.Item>
                                        <Descriptions.Item label="Using Skills">{item.skills}</Descriptions.Item>
                                        <Descriptions.Item label="func">{item.func}</Descriptions.Item>
                                        <Descriptions.Item label="detailed description">{item.details}</Descriptions.Item>

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