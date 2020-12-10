import React, { useState, useCallback } from 'react';
import {
    Typography, Card, Tooltip
    , Row, Col
} from 'antd';
import Image from 'next/image';
import { ProjectLayout } from './style';
const { Title } = Typography;

const projectTabList = [
    {
        key: '다온',
        tab: '다온',
    },
    {
        key: 'ymillonga_map',
        tab: 'ymillonga_map',
    },
    {
        key: 'ymillonga_sns',
        tab: 'ymillonga_sns',
    },
    {
        key: 'portpolio',
        tab: 'portpolio',
    },
];


const Project = () => {

    return (
        <>
            <div data-aos="fade-down"
                data-aos-delay="200"
            >
                <ProjectLayout />
                <Row gutter={[16, 16]} justify="space-around" >
                    <Col xs={12} md={10} lg={6}>
                        <Card
                            hoverable
                            cover={<Image
                                src="/img/daon-logo.png"
                                alt="daon"
                                width={100} height={150}
                            />} >
                            <Card.Meta title="Daon Homepage Renewal"
                                description="다온 펜션 홈페이지를 리뉴얼하는 프로젝트입니다."
                            />
                        </Card>

                    </Col>
                    <Col xs={12} md={10} lg={6}>

                        <Card
                            hoverable
                            cover={<Image
                                src="/img/ymillonga-map.png"
                                alt="map"
                                width={100} height={150}
                            />} >
                            <Card.Meta title="ymillonga-map version"
                                description="ymillonga-map를 vanilla JS로 만들어본 프로젝트입니다."
                            />
                        </Card>
                    </Col>
                    <Col xs={12} md={10} lg={6}>
                        <Card
                            hoverable
                            cover={<Image
                                src="/img/ymillonga-sns.png"
                                alt="sns"
                                width={100} height={150}
                            />} >
                            <Card.Meta title="ymillonga-sns version"
                                description="ymillonga-sns를 React로 만들어본 프로젝트입니다."
                            />
                        </Card>

                    </Col>
                    <Col xs={12} md={10} lg={6}>
                        <Card
                            hoverable
                            cover={<Image
                                src="/img/background-me.jpg"
                                alt="daon"
                                width={100} height={150}
                            />} >
                            <Card.Meta title="juyoung's portpolio"
                                description="React로 만든 현재 보고 계신 포트폴리오 사이트입니다."
                            />
                        </Card>
                    </Col>
                </Row>

            </div>
        </>

    );
}
export default Project;