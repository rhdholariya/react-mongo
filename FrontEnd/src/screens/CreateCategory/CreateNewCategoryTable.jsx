import {Button, Card, Flex, Input, Layout, Table} from "antd";
import { useState } from "react";
import {SearchOutlined} from '@ant-design/icons';
import history from "../../utils/history.js";
import CreateNewCategoryModal from "../../components/CategoryContents/CreateNewCategoryModal/CreateNewCategoryModal.jsx";

const CreateNewCategoryTable = () => {
    const [searchText, setSearchText] = useState('');
    const [isOpen, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!isOpen);
    };

    const handleSearch = value => {
        setSearchText(value);
    };
    const modalProps = {isOpen, toggle};

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
                    <a className="link_underline" onClick={() => history.push(`/brand-products/${row.id}`)}>
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
            render: () => {
                return (
                    <Flex gap="10px">
                        <Button
                            type="primary"
                            style={{marginRight: 10}}
                            onClick={toggle}
                        >
                            Edit
                        </Button>
                        <Button type="primary" danger>
                            Delete
                        </Button>
                    </Flex>
                );
            }
        },
    ];

    const dataSource = [
        {
            id: 1,
            key: '1',
            name: 'Mike',
            hsn_name: 'Mike',
            hsn_code: '2342352342398',
            created_at: '09/04/2024',
        },
        {
            id: 2,
            key: '1',
            name: 'Mike',
            hsn_name: 'Mike',
            hsn_code: '2342352342398',
            created_at: '09/04/2024',
        },
        {
            id: 3,
            key: '1',
            name: 'Mike',
            hsn_name: 'Mike',
            hsn_code: '2342352342398',
            created_at: '09/04/2024',
        },
    ];
    const filteredDataSource = dataSource.filter(item =>
        Object.values(item).some(val => typeof val === 'string' && val.toLowerCase().includes(searchText.toLowerCase()))
    );

    return (
        <Layout>
            <Card>
                <Flex vertical>
                    <Button
                        type="primary"
                        size="large"
                        style={{width: 200, marginBottom: 15}}
                        onClick={toggle}
                    >
                        Create New Category
                    </Button>
                    <Input
                        placeholder="Search in ID, Name, HSN NAME, HSN CODE"
                        prefix={<SearchOutlined/>}
                        onChange={e => handleSearch(e.target.value)}
                        style={{width: 400, height: 40, marginBottom: 10}}
                    />
                </Flex>
                <Table
                    className="standard_table"
                    dataSource={filteredDataSource}
                    columns={columns}
                />
            </Card>
            <CreateNewCategoryModal {...modalProps} />
        </Layout>
    );
};

export default CreateNewCategoryTable;