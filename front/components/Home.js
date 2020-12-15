import React from 'react';
import { Typography, Col } from 'antd';
const { Title } = Typography;
const Home = () => {
    return (
        <Col
            flex="auto"
            className="home-layout-background">
            <Title
                data-aos="fade-up"
                data-aos-duration="2000"
                level={1}
                style={{
                    textAlign: 'right',
                    margin: '30% 20%', lineHeight: '2em'
                }}
            >어서오세요!<br />
                반갑습니다.
                </Title>
        </Col>
    );
}
export default Home;