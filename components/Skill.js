import React from 'react';
import { Divider, Popover, Row, Col, List } from 'antd';
import Image from 'next/image';


const Skill = () => {
    const Expert = (
        <div style={{ textTransform: 'uppercase', textAlign: 'center' }}>
            <p>html5</p>
            <p>css3</p>
            <p>sass/scss</p>
            <p>jquery</p>
        </div>
    );
    const Intermediate = (
        <div style={{ textTransform: 'uppercase' }}>
            <p>vanilla javascript</p>
            <p>ECMAscript6</p>
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
                gutter={2}>
                <Col xs={8} sm={4} md={4}>
                    <Image
                        src="/img/logo/html5.png"
                        alt="html5"
                        width={100}
                        height={100}
                    />
                </Col>
                <Col xs={8} sm={4} md={4}>
                    <Image
                        src="/img/logo/css3.png"
                        alt="css3"
                        width={100}
                        height={100}
                    />
                </Col>
                <Col xs={8} sm={4} md={4}>
                    <Image
                        src="/img/logo/jquery.png"
                        alt="jquery"
                        width={100}
                        height={100}
                    />
                </Col>
                <Col xs={8} sm={4} md={4}>
                    <Image
                        src="/img/logo/sass.png"
                        alt="sass"
                        width={100}
                        height={100}
                    />
                </Col>
            </Row>
            </Popover>


            <Divider orientation="center"> Intermediate</Divider>
            <Popover content={Intermediate} title="현재 집중적으로 익히고 있습니다">  <Row
                justify="space-around"
                data-aos="slide-up"
                gutter={[24, 8]}>
                <Col xs={8} sm={4} md={4}>
                    <Image
                        src="/img/logo/js.png"
                        alt="vanillajs"
                        width={100}
                        height={100}
                    />
                </Col>
                <Col xs={8} sm={4} md={4}>
                    <Image
                        src="/img/logo/es6.png"
                        alt="es6"
                        width={100}
                        height={100}
                    />
                </Col>

                <Col xs={8} sm={4} md={4}>
                    <Image
                        src="/img/logo/react.png"
                        alt="react"
                        width={100}
                        height={100}
                    />
                </Col>

                <Col xs={8} sm={4} md={4}>
                    <Image
                        src="/img/logo/redux.png"
                        alt="redux"
                        width={100}
                        height={100}
                    />
                </Col>
                <Col xs={8} sm={4} md={4}>
                    <Image
                        src="/img/logo/nodejs.png"
                        alt="nodejs"
                        width={100}
                        height={100}
                    />
                </Col>
                <Col xs={8} sm={4} md={4}>
                    <Image
                        src="/img/logo/git.png"
                        alt="git"
                        width={100}
                        height={100}
                    />
                </Col>
            </Row>
            </Popover>
            <Divider orientation="center">Experience</Divider>
            <Popover content={Experience} title="경험해본 적 있습니다">  <Row
                justify="space-around"
                data-aos="slide-up"
                gutter={[24, 8]}>
                <Col xs={8} sm={4} md={4}>
                    <Image
                        src="/img/logo/expressjs.png"
                        alt="expressjs"
                        width={100}
                        height={100}
                    />
                </Col>
                <Col xs={8} sm={4} md={4}>
                    <Image
                        src="/img/logo/mysql.png"
                        alt="mysql"
                        width={100}
                        height={100}
                    />
                </Col>
                <Col xs={8} sm={4} md={4}>
                    <Image
                        src="/img/logo/react-native.png"
                        alt="react-native"
                        width={100}
                        height={100}
                    />
                </Col>
                <Col xs={8} sm={4} md={4}>
                    <Image
                        src="/img/logo/webpack.png"
                        alt="webpack"
                        width={100}
                        height={100}
                    />
                </Col>
                <Col xs={8} sm={4} md={4}>
                    <Image
                        src="/img/logo/nginx.png"
                        alt="nginx"
                        width={100}
                        height={100}
                    />
                </Col>
                <Col xs={8} sm={4} md={4}>
                    <Image
                        src="/img/logo/php.png"
                        alt="php"
                        width={100}
                        height={100}
                    />
                </Col>
            </Row>
            </Popover>
        </div>
    );
}
export default Skill;