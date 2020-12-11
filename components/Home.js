import React from 'react';
import { Typography } from 'antd';
const { Title } = Typography;
const Home = () => {
    return (
        <div className="home-layout-background">
            <Title
                data-aos="fade-up"
                data-aos-duration="2000"
                level={1}
                style={{
                    textAlign: 'right',
                    margin: '300px 50px', lineHeight: '2em'
                }}
            >어서오세요!<br />
                반갑습니다.
                </Title>
        </div>
    );
}
export default Home;