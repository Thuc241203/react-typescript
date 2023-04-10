import { useState ,useEffect} from 'react'
import axios from 'axios'
import { getAllProduct,deleteProduct ,addProduct, updateProduct} from './api/product'
import { getAllCategories } from './api/category'
import {Routes, Route, useNavigate} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ProductPage from './pages/Product'
import ProductDetailPage from './pages/ProductDetail'
import Homelayout from './pages/layout/Homelayout'
import AdminLayout from './pages/layout/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import { IProduct } from './types/product'
import ProductManagementPage from './pages/admin/ProductManagement'
import AddProductPage from './pages/admin/AddProduct'
import UpdateProductPage from './pages/admin/UpdateProduct'
import SingupPage from './pages/Singup'
import SigninPage from './pages/Singin'
import { IPeople } from './types/user'
import { signup } from './api/auth'
import Taikhoan from './pages/taikhoan'
import Category from './pages/admin/Category'
import { ICategory } from './types/category'

function App() {
  const [products, setProduct] = useState<IProduct[]>([])
  useEffect(()=>{
    getAllProduct().then(({data})=> setProduct(data))
  },[]);
  const [category, setCategory] = useState<ICategory[]>([])
  useEffect(()=>{
    getAllCategories().then(({data})=> setCategory(data))
  },[])

  const navigate = useNavigate();
  const onHandleRemove = (_id:number|string) => {
    deleteProduct(_id).then(() => setProduct(products.filter(item => item._id !== _id)))
  }
  const onHandleAdd = (product:IProduct) => {
    addProduct(product).then(() => setProduct([...products, product]))
  }
  const onHandleAddSignup = (user: IPeople) => {
    console.log(user);
    signup(user)
    navigate('/signin');
 }
  const onHandleUpdate = (product:IProduct)=>{
    console.log(product);
    updateProduct(product).then(()=> getAllProduct().then(({ data }) => setProduct(data)))
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homelayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='/products'>
                  <Route index element={<ProductPage products={products}/>}/>
                  <Route path=':id' element={<ProductDetailPage products={products} />} />  
            </Route>
            <Route path='/signin' element={<SigninPage />} />
            <Route path='/signup'element={<SingupPage onAdd={onHandleAddSignup}/>}/>
            <Route path='/taikhoan' element={<Taikhoan/>}/>
        </Route>  
        <Route path='/admin' element={<AdminLayout/>}>
              <Route index element={<Dashboard/>} />
              <Route path='products'>
                    <Route index element={<ProductManagementPage products={products} onRemove={onHandleRemove}/>}/>
                    <Route path='add' element={<AddProductPage onAdd={onHandleAdd} category={category}/>}/>
                    <Route path=':id/update' element ={<UpdateProductPage onUpdate={onHandleUpdate} products={products} category={category}/>}/>
                    <Route path='category' element={<Category onRemove={onHandleRemove} category={category}/>}/>
              </Route>
        </Route>
      </Routes>     
    </div>
  )
}

export default App
