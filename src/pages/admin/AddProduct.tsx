import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IProduct } from '../../types/product'
import { Button, Checkbox, Form, Input,Upload, Select, InputNumber} from 'antd';
import {PlusOutlined} from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';
import { ICategory } from '../../types/category';

interface IProps {
    onAdd: (product: IProduct) => void,
    category: ICategory[]
}

const AddProductPage = (props: IProps) => {

    const [category,setCategory] = useState<ICategory[]>([])
    useEffect(()=> {
        setCategory(props.category)
    },[props.category])
    const navigate = useNavigate()

    const onFinish = (values: any) => {
        props.onAdd(values);
        navigate('/admin/products')
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >   

                <Form.Item
                    label="Product Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name product!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product Price"
                    name="price"
                    rules={[{ required: true, message: 'Please input your price!' }]}
                >
                    <InputNumber />
                </Form.Item>
                {/* <Form.Item label="Upload" valuePropName="image">
                    <Upload action="/upload.do" listType="picture-card">
                        <div>
                        <PlusOutlined />
                        <div style={{ marginTop: 8 }}>Upload</div>
                        </div>
                    </Upload>
                    <input type="text" />
                </Form.Item> */}
                  <Form.Item
                    label="image"
                    name="image"
                    rules={[{ required: true, message: 'Please input your image!' }]}
                >
                    <Input />
                </Form.Item>
                
                <Form.Item
                    label="description"
                    name="description"
                    rules={[{ required: true, message: 'Please input description' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item name="categoryId" label="Select">
                        
                    <Select>
                        {category.map((category:ICategory)=>{
                           return <Select.Option key={category._id} value={category._id}>${category.name}</Select.Option>
                        })}
                        
                    </Select>
                </Form.Item>    

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button style={{ backgroundColor: 'red' }} type="primary" htmlType="submit">
                        Add New Product
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddProductPage