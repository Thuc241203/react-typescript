import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';
import { IProduct } from '../../types/product'
import { Button, Form, Input,  Upload, Select   } from 'antd';
import Category from './Category';
import { ICategory } from '../../types/category';
interface IProps {
    products: IProduct[],
    onUpdate: (product: IProduct) => void,
    category: ICategory[]
}
const UpdateProductPage = (props: IProps) => {
    const { id } = useParams();
    const navigate = useNavigate()

    const [product, setProduct] = useState<IProduct>() 
    useEffect(() => { 
        const currentProduct = props.products.find((product: IProduct) => product._id === id)
        setProduct(currentProduct); 
    }, [props]);

    const [category,setCategory] = useState<ICategory[]>([])
    useEffect(()=> {
        setCategory(props.category)
    },[props.category]);

    useEffect(() => { 
        setFields() 
    }, [product])
    const [form] = Form.useForm();
    
    const setFields = () => {
        form.setFieldsValue({ 
            _id:product?._id,
            name: product?.name,
            price: product?.price,
            image: product?.image,
            description: product?.description,
            categoryId: product?.categoryId
        })
    }

    const onFinish = (values: any) => {
        props.onUpdate(values);
        navigate('/admin/products')
    };

    const onFinishFailed = (errorInfo: any) => {
        props.onUpdate(errorInfo);
    };

    return (
        <div>
            <Form
                form={form}
                style={{ maxWidth: 1200 }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                
                <Form.Item
                    label=""
                    name="_id"
                    style={{ display: 'none' }} 
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    label="Product Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product Price"
                    name="price"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input />
                </Form.Item>


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
                    rules={[{ required: true, message: 'description!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name="categoryId" label="Select">
                   
                    <Select > 
                        {category.map((category:ICategory)=>{
                           return <Select.Option key={category._id} value={category._id}>${category.name}</Select.Option>
                        })}    
                    </Select>
                </Form.Item>    
                <Form.Item  wrapperCol={{ offset: 8, span: 16  }}>
                    <Button style={{ backgroundColor: 'red' }}  type="primary" htmlType="submit">
                        Update Product
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default UpdateProductPage