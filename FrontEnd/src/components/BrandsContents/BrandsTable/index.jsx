import {Button, Flex, Input, Table} from "antd";
import {SearchOutlined} from '@ant-design/icons';
import {FileExcelOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";
import AddNewAddressModal from "../AddNewAddressModal";
import {useState} from "react";

const BrandsTable = (props) => {
    const {toggle} = props;
    const [isOpenAddressModal,setAddressModal] = useState(false)

    const toggleAddressModal = () => {
        setAddressModal(!isOpenAddressModal);
    }

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
            render: (name, row) => {
                return (
                    <Link
                        className="link_underline"
                        to={`/create-category/${row.key}`}
                    >
                        {name}
                    </Link>
                );
            },
        },
        {
            title: 'LOGO',
            dataIndex: 'logo',
            key: 'logo',
            render: () => {
                return (
                    <img src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg" height="94px"/>
                )
            }
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
            render: () => {
                return (
                    <Flex gap="20px">
                        <Button type="primary" size="large" onClick={toggle}>Edit</Button>
                        <Button type="primary" size="large" danger>Delete</Button>
                        <Button type="primary" size="large" onClick={toggleAddressModal}>+ Address</Button>
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
                style={{marginBottom: 15}}
            >
                <Input
                    size="large"
                    placeholder="Search in ld, Brand name"
                    prefix={<SearchOutlined/>}
                    style={{width: 500}}
                />
                <Flex gap="small">
                    <Button className="export_csv">
                        EXPORT <FileExcelOutlined/>
                    </Button>
                    <Button primary="true">SHOW / HIDE COLUMNS</Button>
                </Flex>
            </Flex>
            <Table
                className="standard_table"
                dataSource={dataSource}
                columns={columns}
            />
            <AddNewAddressModal
                isOpen={isOpenAddressModal}
                toggle={toggleAddressModal}
            />
        </>
    )
}
export default BrandsTable;