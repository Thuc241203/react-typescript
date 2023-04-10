import React, {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import { IProduct} from '../types/product'

export interface IProps {
  products: IProduct[]
}

const ProductDetailPage = (props:IProps) => {

  const { _id } = useParams()
  
  
  const [product, setProduct] = useState<IProduct>()
  
  useEffect(() => {
     const currenProduct = props.products.find(item=>item._id === Number(_id));
     setProduct(currenProduct);

  }, [props])
  
  return (<div className='text-center'>
          <h1 className='text-center'>ProductDetailPage</h1>
          <img className='flex justify-self-center' src="https://images-prod.anothermag.com/480/260-140-1284-856/azure/another-prod/430/0/430423.jpeg" alt="" />
          <p>{product?.name}</p>
          <p>{product?.price}</p>
      </div>
  )
};


export default ProductDetailPage