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
                        학원에서 교육원 팀장으로 반배정과 시간표를 짜는 업무를 더 효율적으로 할 수 있는 방법을 찾던 도중 프로그래밍을 접하게 됐습니다. 문제를 효율적으로 해결할 수 있는 프로그래밍적 사고방식을 배우며 이러한 기술을 활용해 제가 원하는 교육콘텐츠를 제작하자는 목표를 갖게 됐습니다.<br />
                        그린컴퓨터 아카데미의 'UI/UX 웹퍼블리셔&프론트앤드 개발자 양성과정'을 수강한지 4개월 정도 되자 풀스텍으로 하나의 서비스가 만들어지는 과정을 모두 경험하고 싶어 독학을 결심했습니다. ymillonga 프로젝트를 혼자 만들어보며 매일매일 새로운 기술을 배워나가고 있습니다.
                    </Text>
                </Panel>
                <Panel header="경기대 교육대학원 다문화교육전공 석사과정" key="2">
                    <Text type="secondary" >기간 2016.03 ~ 2018.08</Text>
                    <br />
                    <Text>
                        '초등학교 중도입국자녀 대상 한국어 수업에 관한 질적 연구'를 주제로 논문을 준비하며 이제는 학교에서도 지금까지와는 다른 교육이 절실히 필요함을 느꼈습니다.<br />이때 대학원 학비를 벌기위해
 논리속독학원에서 근무하게 되었습니다. 학생들 앞에서 강의하는 것보다 수업관련 자료를 제작하는 업무에 더 흥미가 많은 제 자신을 발견할 수 있는 경험이었습니다.</Text>
                </Panel>
                <Panel header="경기대학교 문예창작학과" key="3">
                    <Text type="secondary" >기간 2011.03 ~ 2015.02</Text>
                    <br />
                    <Text>
                        교육콘텐츠를 제작하는 기업을 목표로 취업준비를 하던 중 주변 지역봉사센터에서 중국 유학생의 한국어지도 멘토링을 하게 되었습니다. 이때 다양한 문화를 가진 학생들을 교육하는 것에 흥미를 느끼고 교육학을 전문적으로 공부하고 싶어 대학원에 다니기로 결심합니다.
                        </Text>

                </Panel>
                <Panel header="상일여자고등학교" key="4">
                    <Text type="secondary" >기간 2008.03 ~ 2011.02</Text>
                    <br />              <Text>어려서부터 무언가를 만들어내는 것을 좋아했습니다. 제가 만든 인형을 가지고 혼자 이야기를 만들며 상상의 나래를 펼치는 것을 즐겨했는데 그것이 제가 글을 쓰게 되는데 중요한 영향을 주었습니다. <br />
                    글이라는 재료를 가지고 새로운 창조물을 만들어내는 일의 매력을 알고 동화작가가 되는 꿈을 꾸었습니다.</Text>
                </Panel>
            </Collapse>
        </>
    );
}
export default Education;