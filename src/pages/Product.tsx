import React,{useEffect, useState} from 'react'
import { IProduct } from '../types/product'
export interface IProps {
    products: IProduct[],
}
const ProductPage = (props: IProps) => {
    
    const [data,setData] = useState<IProduct[]>([])
    useEffect(()=>{
        setData(props.products)
    },[props])
    return (
    <div className='grid grid-cols-3 gap-4'>

        {data.map(product =>{
            return <div className=' ' key={product._id}>
                <div className='text-center border-2 p-2 m-2'>
                    <img className='' src="https://images-prod.anothermag.com/480/260-140-1284-856/azure/another-prod/430/0/430423.jpeg"  alt="" />
                    <h2>Name: {product.name}</h2>
                    <p>Price: {product.price}</p>
                    <p>Mô tả: {product.description}</p>
                </div>
            </div>
        })}
    </div>
  )
}

export default ProductPage