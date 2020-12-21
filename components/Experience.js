import React from 'react';
import {
    Typography, Card, Tooltip
    , Row, Col
} from 'antd';

import {
    default as TeamOutlined,
} from '@ant-design/icons/TeamOutlined';
import {
    default as CalendarOutlined,
} from '@ant-design/icons/CalendarOutlined';
import {
    default as CopyOutlined,
} from '@ant-design/icons/CopyOutlined';
import { ExperienceLayout } from './style';
const { Title } = Typography;

const Experience = () => {


    return (
        <>
            <ExperienceLayout />
            <Row xs={16} sm={12} md={8}>
                <Title
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    level={3}
                >회사에 필요하다면 저는 이런 일도 할 수 있습니다
                </Title>
            </Row>
            <div data-aos="fade-down"
                data-aos-delay="200"
            >
                <Row justify="space-between" gutter={[16, 8]} >
                    <Col xs={16} sm={12} md={8}>
                        <Tooltip
                            trigger="hover"
                            title="저는 논리적인 글쓰기에 자신이 있습니다. 석사논문 작성 경험과 더불어 전에 일했던 논술학원에서 논리적 글쓰기를 지도한 경험이 있습니다. 더불어 국어국문학부생 논문 지도, 군무원 이력서 지도 등의 경험이 있습니다.">
                            <Card
                                hoverable
                                cover={
                                    <CopyOutlined style={{ fontSize: 50 }} />
                                }
                            >
                                <Card.Meta title="Documentation"
                                    description="저의 논리적인 글쓰기 능력은 사내에 필요한 문서 작업에 도움이 될 것입니다"
                                />
                            </Card>
                        </Tooltip>
                    </Col>
                    <Col xs={16} sm={12} md={8}>
                        <Tooltip
                            trigger="hover"
                            title="저는 다른 사람의 성장에 도움이 되는 일을 하는 데 관심이 많습니다. 대학원 시절과 학원에서 다양한 교육 프로그램을 체험하고 운영한 경험으로 사내 HRD에 도움을 드릴 수 있습니다.">
                            <Card
                                hoverable
                                cover={
                                    <TeamOutlined style={{ fontSize: 50 }} />
                                }
                            >
                                <Card.Meta title="HRD"
                                    description="동료들과 함께 성장하는 직장문화를 만들어가는 일을 좋아합니다."
                                />
                            </Card>
                        </Tooltip>
                    </Col>
                    <Col xs={16} sm={12} md={8}>
                        <Tooltip
                            trigger="hover"
                            title="제21대 국회의원선거 예비후보 정재준 후보의 홍보기사 작성 및 이미지메이킹을 담당하는 봉사활동을 한 경험이 있습니다. 또한 학원에서 학습 프로그램 홍보 문구를 작성한 경험이 있습니다.">
                            <Card
                                hoverable
                                cover={<CalendarOutlined style={{ fontSize: 50 }} />
                                }
                            >
                                <Card.Meta title="Promote&Planning"
                                    description="회사를 홍보하는 copywrite와 설득력 있는 프로젝트 기획서를 작성할 수 있습니다."
                                />
                            </Card>
                        </Tooltip>
                    </Col>
                </Row>
            </div>
        </>
    );
}
export default Experience;