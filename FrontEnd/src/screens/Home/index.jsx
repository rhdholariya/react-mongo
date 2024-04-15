import { React, useState } from "react";
import { Button, Card, Layout } from "antd"
import AddNewBrandModal from "../../components/BrandsContents/AddNewBrandModal";
import BrandsTable from "../../components/BrandsContents/BrandsTable";


export const HomePage = () => {
    const [isOpen, setOpen] =  useState(false);

    const toggle = () => {
        setOpen(!isOpen);
    };

    const modalProps = { isOpen, toggle };
    return (
        <Layout>
            <Card>
                <Button
                    type="primary"
                    size="large"
                    style={{ marginBottom: 15 }}
                    onClick={toggle}
                >
                    Create New Brand
                </Button>
                <BrandsTable />
            </Card>
            <AddNewBrandModal {...modalProps} />
        </Layout>
    )
}