import { Button, Card, Layout, Table } from "antd"

const columns = [
    {
        title: 'ID',
        dataIndex: 'name',
        key: 'ID',
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

export const HomePage = () => {
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        }
    ];
    return (
        <Layout>
            <Card>
                <Button type="primary" size="large" style={{ marginBottom: 15 }}>
                    Create New Brand
                </Button>
                <Table
                    dataSource={dataSource}
                    columns={columns}
                />
            </Card>
        </Layout>
    )
}