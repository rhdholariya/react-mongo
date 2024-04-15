import { Button, Flex, Form, Input, Modal } from "antd";
import { addressFields } from "../../../fields/addressFields";

const AddNewAddressModal = ({ isOpen, toggle }) => {
    const closeModal = () => {
        toggle();
    }
    return (
        <Modal
            open={isOpen}
            cancelButtonProps={{ style: { display: 'none' } }}
            okButtonProps={{ style: { display: 'none' } }}
            onCancel={closeModal}
        >
            <Form
                name="basic"
                labelCol={{ style: { fontWeight: "600" } }}
                autoComplete="off"
                layout="vertical"
            >
                {addressFields.map((field,index) => (
                    <Form.Item
                        key={index}
                        label={field}
                        name={field}
                        style={{marginBottom:20}}
                        rules={[
                            {
                                required: true,
                                message: "This Field is Required",
                            },
                        ]}
                    > <Input size="large" placeholder={`Enter ${field}`}/>
                    </Form.Item>
                ))}
                <Flex gap="small" wrap="wrap" justify="end">
                    <Button onClick={closeModal} size="large">Cancel</Button>
                    <Button type="primary" size="large" htmlType="submit">Save</Button>
                </Flex>
            </Form>
        </Modal>
    )
}

export default AddNewAddressModal;