import React from 'react';
import { Divider, Popover, Row, Col } from 'antd';
import Image from 'next/image';


const Skill = () => {
    const Expert = (
        <div style={{ textTransform: 'uppercase', textAlign: 'center' }}>
            <p>html5</p>
            <p>css3</p>
            <p>jquery</p>
        </div>
    );
    const Intermediate = (
        <div style={{ textTransform: 'uppercase' }}>
            <p>javascript</p>
            <p>react</p>
            <p>redux</p>
            <p>nodejs</p>
            <p>git</p>

        </div>
    );
    const Experience = (
        <div style={{ textTransform: 'uppercase' }}>
            <p>expressjs</p>
            <p>mysql</p>
            <p>react-nativ</p>
            <p>webpack</p>
            <p>nginx</p>
            <p>php</p>
        </div>
    );
    return (
        <div
            data-aos-anchor="#trigger-skill"
            style={{ height: 'auto' }}>
            <Divider orientation="center"> Expert</Divider>
            <Popover content={Expert} placement="bottom" title="자신 있습니다">  <Row
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
                <Col xs={8} sm={5} md={3}>
                    <Image
                        src="/img/logo/jquery.png"
                        alt="jquery"
                        width={150}
                        height={150}
                    />
                </Col>
            </Row>
            </Popover>


            <Divider orientation="center"> Intermediate</Divider>
            <Popover content={Intermediate} title="현재 집중적으로 익히고 있습니다">  <Row
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
                        src="/img/logo/nodejs.png"
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
            </Popover>
            <Divider orientation="center">Experience</Divider>
            <Popover content={Experience} title="경험해본 적 있습니다">  <Row
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
            </Popover>
        </div>
    );
}
export default Skill;