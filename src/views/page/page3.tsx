import React from 'react';
import { Button, Form, Input, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    key: string;
    name: string;
    money: string;
    address: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Cash Assets',
        className: 'column-money',
        dataIndex: 'money',
        align: 'right',
        render(value, record, index) {
            return (<>
                <Form.Item>
                    <Input placeholder="请输入" value={value} />
                </Form.Item>
            </>)
        },
    },
    {
        title: 'Address',
        dataIndex: 'address',
        render(value, record, index) {
            return (<>
                <Form.Item 
                name={"address"+index}
                rules={[record.money?{
                    validateTrigger: 'onBlur',
                    required: true,
                    message: '请输入',
                }:{}]}>
                    <Input placeholder="请输入" value={value} onChange={()=>{data[index].address=value}} />
                </Form.Item>
            </>)
        },
    },
];

const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        money: '￥300,000.00',
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        money: '',
        address: '',
    },
    {
        key: '3',
        name: 'Joe Black',
        money: '￥120,000.00',
        address: 'Sydney No. 1 Lake Park',
    },
];

const App: React.FC = () => {
    const [form] = Form.useForm();

    return (<Form
        form={form}
    ><Table
        columns={columns}
        dataSource={data}
        bordered
        title={() => 'Header'}
        footer={() => 'Footer'}
    />
    <Button type="primary" onClick={() => {
        console.log(form.getFieldsValue())
        form.validateFields().then((values) => {
            console.log(values)
            console.log(data)
        }).catch((err) => {
            console.log(err)
        })
    }}>提交</Button>
    </Form>)
}



export default App;