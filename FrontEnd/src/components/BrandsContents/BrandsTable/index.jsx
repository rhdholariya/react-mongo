import { Button, Flex, Input, Space, Table } from "antd";
import { SearchOutlined } from '@ant-design/icons';

const columns = [
    {
        title: 'ID',
        dataIndex: 'name',
        key: 'id',
    },
    {
        title: 'BRAND NAME',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'LOGO',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'CREATED AT',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'ACTIONS',
        dataIndex: 'address',
        key: 'address',
    },
];

const dataSource = [
    {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
    }
];

const BrandsTable = () => {
    return (
        <>
            <Flex
                gap="middle" 
                align="center"
                justify="space-between"
                style={{ marginBottom: 15 }}
            >
                <Input
                    size="large"
                    placeholder="Search in ld, Brand name"
                    prefix={<SearchOutlined />}
                    style={{width:500}}
                />
                <Flex gap="small">
                    <Button>Cancel</Button>
                    <Button type="primary" htmlType="submit">Save</Button>
                </Flex>
            </Flex>
            <Table
                dataSource={dataSource}
                columns={columns}
            />
        </>
    )
}
export default BrandsTable;