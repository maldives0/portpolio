import React from 'react';
import { Typography } from 'antd';
const { Title, Paragraph, Text } = Typography;
const Home = () => {
    return (
        <>
            <Title
                data-aos="fade-out"
                data-aos-duration="2000"
                level={1}
                style={{
                    textAlign: 'left',
                    marginLeft: '300px', lineHeight: '3em'
                }}
            >어서오세요!<br />
                반갑습니다.
                </Title>
        </>
    );
}
export default Home;