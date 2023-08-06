import React from 'react';
import { Button, Card, Form, Input } from 'antd';
import Title from './title';
import rbackground from '@/assets/images/bgimgs/register.jpg';


const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

const App: React.FC = () => {
    const gridStyleLeft: React.CSSProperties = {
        width: '50%',
        textAlign: 'center',
        padding: '0px',
        margin: '0px',
    };
    const gridStyleRight: React.CSSProperties = {
        width: '50%',
        textAlign: 'center',
    };
    return <>
        <Card title={<Title />}
            style={{ width: 800, background: 'rgba(255,255,255,0.3)' }}
            bordered={false}
            className="animate__animated animate__flipInY" >
            <Card.Grid style={gridStyleLeft} >
                <img src={rbackground} style={{ width: "100%", height: "100%", transition: "all 1s ease" }} />
            </Card.Grid>
            <Card.Grid style={gridStyleRight} >
                <Form
                    name="basic2"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="newUsername"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="newPassword"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item name="AgainPassword" label="Password Again">
                        <Input.Password />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }} >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card.Grid>
        </Card>


    </>
};

export default App