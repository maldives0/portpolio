import React, { useEffect } from 'react';
import { AboutLayout } from './style';
import { Typography } from 'antd';

const { Title, Paragraph, Text } = Typography;

const About = () => {

    return (
        <div data-aos-anchor="#trigger-about">
            <AboutLayout />
            <Paragraph
                style={{ fontSize: 22 }}
                data-aos="fade-down"
                data-aos-duration="4000"
            >
                <Text>
                    “빼어난 구두 수선공이 되려면 이제 구두를 잘 만드는 지식만으로는 부족하다.
              <br />

                    <Text>
                        발에 대한 이해가 필요하다.”
                   </Text>

                    <br />
                    <div
                        style={{ marginTop: 10, float: 'right', fontSize: 10 }}
                    >  - 영국 경제학자 슈마허
                        (Ernst Friedrich Schumacher)</div>
                </Text>
            </Paragraph>
            <Paragraph style={{ marginTop: 100 }}>
                <Title
                    level={4}>
                    제가 가진 프로그래밍 기술의 종류보다
                               </Title>
                <Title
                    data-aos="zoom-in-up"
                    data-aos-duration="4000"
                    data-aos-delay="100"
                    level={1}
                >
                    고객을 이해하는 일을 첫째로 생각하는 <br /><br />
                    개발자 정주영입니다.
                </Title>

            </Paragraph>

        </div>
    );
}
export default About;