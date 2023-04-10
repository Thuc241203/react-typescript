import React,{useEffect, useState} from 'react'
import { Space, Table, Button } from 'antd';
import { Link } from 'react-router-dom'
import { IProduct } from '../../types/product'
import type {ColumnsType} from 'antd/es/table';
interface DataType {
    key: string | number;
    _id: number| string;
    name: string;
    price: number;
}
interface IProps {
    products: IProduct[],
    onRemove: (_id: number|string) => void
}

const ProductManagementPage = (props: IProps) => {
    const removeProduct =  (_id: number|string) => {
       
        const cFirm = confirm("bạn có muốn xóa sản phẩm không");
        if(cFirm == true){
            console.log("id",_id);
            props.onRemove(_id)
            
        }else 
        return;
        
    }
    console.log(props.products);
    const columns: ColumnsType<DataType> = [
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Product Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Product image',
            dataIndex: 'image',
            render: (text) => <a href="#">{text}</a>
        },
        {
            title: 'description',
            dataIndex: 'description',
            render: (text) => <a>{text}</a>
        },
        {
            title: 'category product',
            dataIndex: 'categoryId',
            key: "categoryId",
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (

                <Space size="middle">
                    <Button type="primary" style={{ backgroundColor: 'red' }} onClick={() => removeProduct(record._id)}>Remove</Button>
                    <Button type="primary" style={{ backgroundColor: 'red' }} ><Link to={`/admin/products/${record._id}/update`}>Update</Link></Button>
                </Space>
            ),
        },
    ];

    const [dataProduct, setDataProduct] = useState<IProduct[]>([]);
    useEffect(()=>{
        setDataProduct(props.products)
    },[props]);

    const data: DataType[] = dataProduct.map((item: IProduct) => {
        return {
            key: item._id,
            ...item
        }
    })

   
    return (
        <div>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
        </div>
    )
}

export default ProductManagementPage