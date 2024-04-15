import { Button, Flex, Form, Input, Modal } from "antd";

const AddNewBrandModal = (props) => {
    const { isOpen, toggle } = props;
    return (
        <Modal
            open={isOpen}
            cancelButtonProps={{ style: { display: 'none' } }}
            okButtonProps={{ style: { display: 'none' } }}
            onCancel={toggle}
        >
            <Form
                name="basic"
                labelCol={{ style: { fontWeight: "bold" } }}
                autoComplete="off"
                layout="vertical"
            >
                <Form.Item
                    label="Name"
                    name="Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please fill your username!',
                        },
                    ]}
                > <Input size="large" />
                </Form.Item>
                <Form.Item
                    label="Logo"
                    name="Logo"
                    rules={[
                        {
                            required: true,
                            message: 'Please upload your File',
                        },
                    ]}
                > <Input type="file" size="large" />
                </Form.Item>
                <Flex gap="small" wrap="wrap" justify="end">
                    <Button onClick={toggle}>Cancel</Button>
                    <Button type="primary" htmlType="submit">Save</Button>
                </Flex>
            </Form>
        </Modal>
    )
}

export default AddNewBrandModal;