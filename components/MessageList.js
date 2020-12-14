import React, { useCallback, useState } from 'react';
import useSWR, { mutate, trigger } from 'swr';
import { Table, Divider, Button } from 'antd';
import { backUrl } from '../config/url';
import axios from 'axios';
const fetcher = (url) => axios.get(url, { withCredentials: true }).then((result) => result.data);
const MessageList = () => {
    const { data, error } = useSWR(`${backUrl}/messages`, fetcher);
    if (error) {
        console.error(error);
        return (<div>데이터 로딩 중 에러가 발생했습니다</div>);
    }

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
    const dataSource = data?.map(v => ({
        key: v.id,
        name: v.name,
        email: v.email,
        message: v.message,
    }));

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const onSelectChange = useCallback((selectedRowKeys) => {
        setSelectedRowKeys(selectedRowKeys);
    }, []);

    const onDelete = useCallback(async () => {
        try {
            const url = `${backUrl}/messages`;
            mutate(url, data?.filter(c => c.id !== selectedRowKeys), false);
            await axios.delete(`${backUrl}/messages/${selectedRowKeys}`, { withCredentials: true });
            trigger(url);
        }
        catch (err) {
            console.error(err);
        }
    }, [selectedRowKeys]);

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
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
                dataSource={dataSource}

            />
            <Button onClick={onDelete}>
                Delete
            </Button>
        </div>
    );

};

export default MessageList;
