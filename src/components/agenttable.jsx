import React, { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';
import { useNavigate } from 'react-router-dom';

const data = [
    {
        key: '1',
        agentname: 'John Brown',
        age: 32,
        occupation: 'Enginner',
        place: 'Islamabad',
        hobbies: 'Art & Craft',
        action: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        agentname: 'Joe Black',
        age: 42,
        occupation: 'Enginner',
        place: 'Islamabad',
        hobbies: 'Art & Craft',
        action: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        agentname: 'Jim Green',
        age: 32,
        occupation: 'Enginner',
        place: 'Islamabad',
        hobbies: 'Art & Craft',
        action: 'Sydney No. 1 Lake Park',
    },
    {
        key: '4',
        agentname: 'Jim Red',
        age: 32,
        occupation: 'Enginner',
        place: 'Islamabad',
        hobbies: 'Art & Craft',
        action: 'London No. 2 Lake Park',
    },
];

const AgentTable = () => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1677ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        filterDropdownProps: {
            onOpenChange(open) {
                if (open) {
                    setTimeout(() => searchInput.current?.select(), 100);
                }
            },
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#fffff',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });
    const columns = [
        {
            title: 'Agent Name',
            dataIndex: 'agentname',
            key: 'agentname',
            width: '10%',
            ...getColumnSearchProps('agentname'),
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            width: '10%',
            ...getColumnSearchProps('age'),
        },
        {
            title: 'Occupation',
            dataIndex: 'occupation',
            key: 'occupation',
            width: '10%',
            ...getColumnSearchProps('occupation'),
        },
        {
            title: 'Place',
            dataIndex: 'place',
            key: 'place',
            width: '10%',
            ...getColumnSearchProps('place'),
        },
        {
            title: 'Hobbies',
            dataIndex: 'hobbies',
            key: 'hobbies',
            width: '10%',
            ...getColumnSearchProps('hobbies'),
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            width: '10%',
            ...getColumnSearchProps('action'),
        },
    ];
    const navigate = useNavigate()
    return (
        <div className='p-4'>
            <div className='flex flex-row justify-between items-center' >
                <div className='' >
                    <p className='text-[26px] font-bold text-[#151D48]'>AI Agent</p>
                    <p className='text-[16px] text-[#7E7A7A] mt-1'>Manage and Customize your AI Agents</p>
                </div>
                <div className='inline-block bg-[#E5AB39] py-2 px-8 rounded-lg cursor-pointer mt-8' onClick={() => navigate('/create-agent')}                >
                    <p className='text-[#FFFFFF] text-center font-medium text-[12px]'>Create Agent</p>
                </div>
            </div>
            <div className='mt-6'>
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    );
}

export default AgentTable;
