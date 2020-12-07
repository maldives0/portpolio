import React from 'react';
import { Card } from 'antd';
const Experience = () => {

    const gridStyle = {
        width: '50%',
        textAlign: 'center',
    };
    return (
        <>
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