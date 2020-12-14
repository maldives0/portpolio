import React, { useCallback, useState } from 'react';
import useSWR, { mutate, trigger } from 'swr';
import { Table, Divider, Button } from 'antd';

import fetch from '../hooks/fetch'
const MessageList = () => {
    const { data } = useSWR('/api/messages', fetch);
    console.log(data);
    const columns = [
        {
            title: 'Key',
            dataIndex: 'key',
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Message',
            dataIndex: 'message',
        },
    ];
    const [selectedKey, setSelectedKey] = useState('');
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            setSelectedKey(selectedRows);
        },
        getCheckboxProps: (record) => ({
            disabled: record.name === 'Disabled User',
            // Column configuration not to be checked
            name: record.name,
        }),
    };
    const onDelete = useCallback(async () => {
        try {
            console.log(selectedKey);
            mutate('/api/messages', await fetch('/api/messages', {
                method: 'DELETE',
                body: JSON.stringify(selectedKey)
            }))

            trigger('/api/messages');
        }
        catch (err) {
            console.error(err);
        }
    }, []);
    return (
        <div>
            <Divider />
            <Table
                rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
            />
            <Button onClick={onDelete}>
                Delete
            </Button>
        </div>
    );

};

export default MessageList;
