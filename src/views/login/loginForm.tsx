import { Button, Card, Form, Input } from 'antd'
import React, { useContext } from 'react'
import lbackground from '@/assets/images/bgimgs/login.jpg';
import { ContactsTwoTone, TrophyTwoTone } from '@ant-design/icons';
import Login, { MyContext } from './index';
import Title from './title';






interface MyComponentProps {
    onFinish: any,
    onFinishFailed: any,
}


const loginForm: React.FC<MyComponentProps> = (props) => {
    const onFinish = props.onFinish
    const onFinishFailed = props.onFinishFailed
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

    return (
        <>
            <Card title={<Title />}
                style={{ width: 800, background: 'rgba(255,255,255,0.3)' }}
                bordered={false}
                className="animate__animated animate__flipInY"
            >
                <Card.Grid style={gridStyleLeft} >
                    <img src={lbackground} style={{ width: "100%", height: "100%" }} />
                </Card.Grid>
                <Card.Grid style={gridStyleRight} >
                    <Form
                        name="basic1"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item wrapperCol={{ offset: 2, span: 20 }}
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input prefix={<ContactsTwoTone />} />
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{ offset: 2, span: 20 }}
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password prefix={<TrophyTwoTone />} autoComplete='false' />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 0, span: 24 }} >
                            <a style={{ marginRight: "30px" }}>forget my password</a>
                            <Button type="primary" htmlType="submit" style={{ marginLeft: "30px" }}>
                                Log in!
                            </Button>
                        </Form.Item>
                    </Form>
                </Card.Grid>
            </Card>


        </>
    )
}

export default loginForm