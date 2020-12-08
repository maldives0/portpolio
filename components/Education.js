import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const Education = () => {
    return (
        <>
            <Collapse defaultActiveKey={['1']} >
                <Panel header="Front-End Develop 독학" key="1">
                    <p>{text}</p>
                </Panel>
                <Panel header="경기대 교육대학원 다문화교육전공 석사과정 졸업" key="2">
                    <p>{text}</p>
                </Panel>
                <Panel header="경기대학교 문예창작학과 졸업" key="3">
                    <p>{text}</p>
                </Panel>
                <Panel header="경기대학교 문예창작학과 졸업" key="4">
                    <p>{text}</p>
                </Panel>
            </Collapse>
        </>
    );
}
export default Education;