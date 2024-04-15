import { Input, Table } from "antd";


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
            <Table
                dataSource={dataSource}
                columns={columns}
            />
        </>
    )
}
export default BrandsTable;