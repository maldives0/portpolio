import React from 'react';
import { AboutLayout } from './style';
import { Typography } from 'antd';
import { useMediaQuery } from "react-responsive";
const { Title, Paragraph, Text } = Typography;

const About = () => {

    const isTabletPC = useMediaQuery({ query: "(min-width: 768px) " });

    return (
        <div data-aos-anchor="#trigger-about"
            className={isTabletPC ? "about-layout-background-pc" : "about-layout-background-mobile"}>
            <AboutLayout />
            <Paragraph
                style={isTabletPC ? { fontSize: 22, textAlign: 'center', padding: '3%' } : { fontSize: 18, textAlign: 'center', padding: '3%' }}
                data-aos="fade-down"
            >
                <Text
                    className="ant-typography-about">
                    “빼어난 구두 수선공이 되려면 이제 구두를 잘 만드는 지식만으로는 부족하다.
              <br />
                    <br />
                    <Text
                        className="ant-typography-about">
                        발에 대한 이해가 필요하다.”
                   </Text>

                    <br />
                    <div
                        style={{ marginTop: 10, float: 'right', fontSize: 10 }}
                    >  - 영국 경제학자 슈마허
                        (Ernst Friedrich Schumacher)</div>
                </Text>
            </Paragraph>
            <Paragraph
                style={{ marginTop: 100 }}>
                <Title
                    data-aos="fade-down"
                    className="ant-typography-about"
                    level={4}>
                    제가 가진 프로그래밍 기술의 종류보다
                               </Title>
                <Title
                    data-aos="zoom-in-up"
                    data-aos-duration="4000"
                    data-aos-delay="100"
                    className="ant-typography-about"
                    level={isTabletPC ? 1 : 3}
                >
                    고객을 이해하는 일을 첫째로 생각하는 <br /><br />
                    개발자 정주영입니다.
                </Title>

            </Paragraph>

        </div>
    );
}
export default About;