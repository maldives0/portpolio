import React, { useState } from 'react';
import Proptypes from 'prop-types';
import axios from 'axios';
import useSWR, { mutate, trigger } from 'swr';
import { Table, Divider, Button } from 'antd';
const MessageList = ({ messagesFromServer }) => {
    const { data } = useSWR('/messages', { initialData: messagesFromServer });
    console.log(data);
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
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
            setSelectedKey(selectedRowKeys);
        },
        getCheckboxProps: (record) => ({
            disabled: record.name === 'Disabled User',
            // Column configuration not to be checked
            name: record.name,
        }),
    };
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
            <Button
                onClick={async () => {
                    const url = '/messages';
                    mutate(url, data.filter(c => c.key !== selectedKey), false);
                    await axios.delete(`/messages/${selectedKey}`);
                    trigger(url);
                }}
            >
                Delete
            </Button>
        </div>
    );

};

export default MessageList;
