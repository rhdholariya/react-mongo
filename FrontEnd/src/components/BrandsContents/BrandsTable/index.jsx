import { Button, Flex, Input, Table } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import { FileExcelOutlined } from '@ant-design/icons';

const BrandsTable = (props) => {
    const {toggle} = props; 

    const columns = [
        {
            title: 'ID',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: 'BRAND NAME',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'LOGO',
            dataIndex: 'logo',
            key: 'logo',
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
            width: 400,
            render: (_, record) => {
                return (
                    <Flex gap="20px">
                        <Button type="primary" onClick={toggle}>Edit</Button>
                        <Button type="primary" danger>Delete</Button>
                        <Button type="primary">+ Address</Button>
                    </Flex>
                )
            }
        },
    ];
    
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            logo: 32,
            created_at: '10 Downing Street',
            actions: '10 Downing Street',
        },
        {
            key: '2',
            name: 'Mike',
            logo: 32,
            created_at: '10 Downing Street',
            actions: '10 Downing Street',
        },
        {
            key: '3',
            name: 'Mike',
            logo: 32,
            created_at: '10 Downing Street',
            actions: '10 Downing Street',
        }
    ];

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
                    <Button className="export_csv">
                        EXPORT <FileExcelOutlined />
                    </Button>
                    <Button primary="true">SHOW / HIDE COLUMNS</Button>
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