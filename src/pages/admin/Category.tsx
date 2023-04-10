import React,{useEffect, useState} from 'react'
import { Space, Table, Button } from 'antd';
import { Link } from 'react-router-dom'
import { IProduct } from '../../types/product'
import type {ColumnsType} from 'antd/es/table';
import { ICategory } from '../../types/category';
interface DataType {
    key: string | number;
    _id: number| string;
    name: string;
}
interface IProps {
    category: ICategory[],
    onRemove: (_id: number|string) => void
}

const category = (props: IProps) => {
    const removeCategory =  (_id: number|string) => {
       
        const cFirm = confirm("bạn có muốn xóa sản phẩm không");
        if(cFirm == true){
            console.log("id",_id);
            props.onRemove(_id)
            
        }else 
        return;
        
    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (

                <Space size="middle">
                    <Button type="primary" style={{ backgroundColor: 'red' }} onClick={() => removeCategory(record._id)}>Remove</Button>
                    <Button type="primary" style={{ backgroundColor: 'red' }} ><Link to={`/admin/category/${record._id}/update`}>Update</Link></Button>
                </Space>
            ),
        },
    ];

    const [category, setCategory] = useState<ICategory[]>([]);
    useEffect(()=>{
        setCategory(props.category)
    },[props]);

    const data: DataType[] = category.map((item: ICategory) => {
        return {
            key: item._id,
            ...item
        }
    })

   
    return (
        <div>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 3 }} />
        </div>
    )
}

export default category