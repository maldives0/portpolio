import React from 'react';
import { Divider, Card, Row, Col } from 'antd';
import Image from 'next/image';


const Skill = () => {

    return (
        <div
            data-aos-anchor="#trigger-skill"
            style={{ height: 'auto' }}>
            <Divider orientation="center">Expert</Divider>

            <Row
                justify="space-around"
                data-aos="slide-up"
                gutter={8}>
                <Col xs={8} sm={5} md={3}>
                    <Image
                        src="/img/logo/html5.png"
                        alt="html5"
                        width={150}
                        height={150}
                    />
                </Col>
                <Col xs={8} sm={5} md={3}>
                    <Image
                        src="/img/logo/css3.png"
                        alt="html5"
                        width={150}
                        height={150}
                    />
                </Col>
            </Row>
            <Divider orientation="center">Intermediate</Divider>
            <Row
                justify="space-around"
                data-aos="slide-up"
                gutter={[24, 8]}>
                <Col xs={8} sm={5} md={3}>
                    <Image
                        src="/img/logo/js.png"
                        alt="html5"
                        width={150}
                        height={150}
                    />
                </Col>
                <Col xs={8} sm={5} md={3}>
                    <Image
                        src="/img/logo/nodejs.png"
                        alt="html5"
                        width={150}
                        height={150}
                    />
                </Col>
                <Col xs={8} sm={5} md={3}>
                    <Image
                        src="/img/logo/react.png"
                        alt="html5"
                        width={150}
                        height={150}
                    />
                </Col>

                <Col xs={8} sm={5} md={3}>
                    <Image
                        src="/img/logo/redux.png"
                        alt="html5"
                        width={150}
                        height={150}
                    />
                </Col>
                <Col xs={8} sm={5} md={3}>
                    <Image
                        src="/img/logo/git.png"
                        alt="html5"
                        width={150}
                        height={150}
                    />
                </Col>
            </Row>
            <Divider orientation="center">Experience</Divider>
            <Row
                justify="space-around"
                data-aos="slide-up"
                gutter={[24, 8]}>
                <Col xs={8} sm={5} md={3}>
                    <Image
                        src="/img/logo/expressjs.png"
                        alt="html5"
                        width={150}
                        height={150}
                    />
                </Col>
                <Col xs={8} sm={5} md={3}>
                    <Image
                        src="/img/logo/mysql.png"
                        alt="html5"
                        width={150}
                        height={150}
                    />
                </Col>
                <Col xs={8} sm={5} md={3}>
                    <Image
                        src="/img/logo/react-native.png"
                        alt="html5"
                        width={150}
                        height={150}
                    />
                </Col>

                <Col xs={8} sm={5} md={3}>
                    <Image
                        src="/img/logo/webpack.png"
                        alt="html5"
                        width={150}
                        height={150}
                    />
                </Col>
                <Col xs={8} sm={5} md={3}>
                    <Image
                        src="/img/logo/nginx.png"
                        alt="html5"
                        width={150}
                        height={150}
                    />
                </Col>
                <Col xs={8} sm={5} md={3}>
                    <Image
                        src="/img/logo/php.png"
                        alt="html5"
                        width={150}
                        height={150}
                    />
                </Col>
            </Row>
        </div>
    );
}
export default Skill;