import {Button, Card, Flex, Grid, Input, Layout, Row, Table} from "antd";
import {useState} from "react";
import {SearchOutlined} from '@ant-design/icons';
import history from "../../utils/history.js";

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'ID',
    },
    {
        title: 'NAME',
        dataIndex: 'name',
        key: 'name',
        render: (name, row) => {
            return (
                <a onClick={() => history.push(`/create-category/${row.key}`)}>
                    {name}
                </a>
            );
        },
    },
    {
        title: 'HSN NAME',
        dataIndex: 'hsn_name',
        key: 'hsn_name',
    },
    {
        title: 'HSN CODE',
        dataIndex: 'hsn_code',
        key: 'hsn_code',
    },
    {
        title: 'CREATED AT',
        dataIndex: 'created_at',
        key: 'created_at',
    },
    {
        title: 'ACTIONS',
        dataIndex: 'actions',
        key: 'actions',
    },
];

const CreateNewCategoryTable = () => {
    const [searchText, setSearchText] = useState('');
    const dataSource = [
        {
            id: 1,
            key: '1',
            name: 'Mike',
            hsn_name: 'Mike',
            hsn_code: '2342352342398',
            created_at: '09/04/2024',
            actions: (
                <div>
                    <Button type="primary" style={{marginRight: 10}}>
                        Edit
                    </Button>
                    <Button type="primary" danger>
                        Delete
                    </Button>
                </div>
            ),
        }
    ];

    const handleSearch = value => {
        setSearchText(value);
    };

    const filteredDataSource = dataSource.filter(item =>
        Object.values(item).some(val =>
            typeof val === 'string' && val.toLowerCase().includes(searchText.toLowerCase())
        )
    );

    return (
        <Layout>
            <Card>
                <Flex vertical>
                    <Button type="primary" size="large" style={{width: 200, marginBottom: 5}}>
                        Create New Category
                    </Button>
                    <Input
                        placeholder="Search in ID, Name, HSN NAME, HSN CODE"
                        prefix={<SearchOutlined/>}
                        onChange={e => handleSearch(e.target.value)}
                        style={{width: 400, height: 40, marginBottom: 15}}
                    />
                </Flex>
                <Table
                    dataSource={filteredDataSource}
                    columns={columns}
                />
            </Card>
        </Layout>
    );
};

export default CreateNewCategoryTable;