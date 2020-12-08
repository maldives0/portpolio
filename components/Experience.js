import React from 'react';
import { Card, Typography } from 'antd';
const { Title, Paragraph, Text } = Typography;
const Experience = () => {

    const gridStyle = {
        width: '50%',
        textAlign: 'center',
    };
    return (
        <>
            <Paragraph
                data-aos="fade-down"
                data-aos-delay="200"

            >
                <Title
                    level={3}> 지금은 보유한 기술의 종류보다는
                     <br />
                      생각하는 방식이 중요한 시대라고 생각합니다. </Title>

                <Text
                >
                    '문제를 해결하기 위해 정확한 질문을 할 수 있는가?'
                <br />
                    <br />
                '해결하려는 문제를 정확히 이해하고 있는가?' </Text>
            </Paragraph>
            <Card>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>
                    Content
    </Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
            </Card>
        </>
    );
}
export default Experience;