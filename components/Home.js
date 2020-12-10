import React from 'react';
import { Typography } from 'antd';
const { Title } = Typography;
const Home = () => {
    return (
        <>
            <Title
                data-aos="fade-up"
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