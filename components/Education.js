import React from 'react';
import { Collapse, Typography } from 'antd';

const { Panel } = Collapse;
const { Text, Title } = Typography;
const Education = () => {
    return (
        <>
            <Title level={3}>
                저는 이런 길을 걸어왔습니다
                </Title>
            <Collapse accordion defaultActiveKey={['1']}
                style={{ textAlign: "left", fontSize: 17, marginTop: 10 }} >
                <Panel header="Front-End Developing 독학" key="1">
                    <Text type="secondary" >기간 2020.06 ~ 현재</Text>
                    <br />
                    <Text>
                        WEB으로 홈페이지 제작하는 방법을 전문적으로 배우기 위해 그린컴퓨터 아카데미의 'UI/UX 웹퍼블리셔&프론트앤드 개발자 양성과정'을 4개월 정도 수강했습니다. 웹퍼블리셔 기술을 익히는데 치중된 과정이라 주로 인프런과 유튜브강의를 듣고 구글링을 하며 혼자 독학하며 Javascript와 React를 익히고 있습니다.
                    </Text>
                </Panel>
                <Panel header="경기대 교육대학원 다문화교육전공 석사과정" key="2">
                    <Text type="secondary" >기간 2016.03 ~ 2018.08</Text>
                    <br />
                    <Text>
                        '초등학교 중도입국자녀 대상 한국어 수업에 관한 질적 연구'를 주제로 논문을 준비하며 대학원 학비를 벌기위해
 논리속독학원에서 근무하게 되었습니다. 학생들 앞에서 강의하는 것보다 수업관련 자료를 제작하는 업무가 더 재미있었습니다. 교육원 팀장으로 반배정과 시간표를 짜는 업무를 더 효율적으로 할 수 있는 방법을 찾던 도중 프로그래밍을 접하게 됐습니다.</Text>
                </Panel>
                <Panel header="경기대학교 문예창작학과" key="3">
                    <Text type="secondary" >기간 2011.03 ~ 2015.02</Text>
                    <br />
                    <Text>
                        교육콘텐츠를 제작하는 기업을 목표로 취업준비를 하던 중 주변 지역봉사센터에서 소외계층 아동 대상 국어 지도와 중국 유학생의 한국어지도를 하게 되었습니다. 이때 누군가의 성장을 도와주는 일이 저의 적성에 맞다는 걸 알고 대학원에서 교육학을 공부해보고 싶어졌습니다.
                        </Text>

                </Panel>
                <Panel header="상일여자고등학교" key="4">
                    <Text type="secondary" >기간 2008.03 ~ 2011.02</Text>
                    <br />              <Text>어려서부터 책읽기를 좋아해 중학교때부터 학교에 있는 독서부에는 꼭 들었습니다. 글이라는 재료를 가지고 새로운 창조물을 만들어내는 일의 매력에 푹 빠졌습니다. 특히 단순한 표현으로 삶의 깊이를 전하는 동화를 좋아해 동화작가가 되는 꿈을 꾸었습니다.</Text>
                </Panel>
            </Collapse>
        </>
    );
}
export default Education;