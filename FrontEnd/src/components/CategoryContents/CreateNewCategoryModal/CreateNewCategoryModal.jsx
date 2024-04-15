import {Button, Flex, Form, Input, Modal} from "antd";

const CreateNewCategoryModal = (props) => {
    const {isOpen, toggle} = props;
    return (
        <Modal
            open={isOpen}
            cancelButtonProps={{style: {display: 'none'}}}
            okButtonProps={{style: {display: 'none'}}}
            onCancel={toggle}
        >
            <Form
                name="basic"
                labelCol={{style: {fontWeight: "bold"}}}
                autoComplete="off"
                layout="vertical"
            >
                <Form.Item
                    label="Name:"
                    name="Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please fill your name!',
                        },
                    ]}
                > <Input placeholder="Enter Name" size="large"/>
                </Form.Item>
                <Form.Item
                    label="HSN Name:"
                    name="hsn_name"
                    rules={[
                        {
                            required: true,
                            message: 'Please fill your HSN Name',
                        },
                    ]}
                > <Input placeholder="Enter HSN Name" size="large"/>
                </Form.Item>
                <Form.Item
                    label="HSN code:"
                    name="hsn_code"
                    rules={[
                        {
                            required: true,
                            message: 'Please fill your HSN code',
                        },
                    ]}
                > <Input placeholder="Enter HSN Code" size="large"/>
                </Form.Item>
                <Flex gap="small" wrap="wrap" justify="end">
                    <Button onClick={toggle}>
                        Cancel
                    </Button>
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                </Flex>
            </Form>
        </Modal>
    );
};

export default CreateNewCategoryModal;