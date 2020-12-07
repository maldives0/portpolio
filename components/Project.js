import React, { useState, useCallback } from 'react';
import { Card } from 'antd';

const projectTabList = [
    {
        key: '다온',
        tab: '다온',
    },
    {
        key: 'ymillonga_map',
        tab: 'ymillonga_map',
    },
    {
        key: 'ymillonga_sns',
        tab: 'ymillonga_sns',
    },
    {
        key: 'portpolio',
        tab: 'portpolio',
    },
];

const projectListContent = {
    다온: <p>다온 content</p>,
    ymillonga_map: <p>ymillonga_map content</p>,
    ymillonga_sns: <p>ymillonga_sns content</p>,
    portpolio: <p>portpolio content</p>,
};
const Project = () => {
    const [tabKey, setTabKey] = useState('ymillonga_map');
    const onTabChange = useCallback((key) => {
        setTabKey(key);
    }, []);
    return (
        <>
            <Card
                style={{ width: '100%' }}
                tabList={projectTabList}
                activeTabKey={tabKey}
                onTabChange={key => {
                    onTabChange(key);
                }}
            >
                {projectListContent[tabKey]}
            </Card>
        </>

    );
}
export default Project;