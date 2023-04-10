import React from 'react'
import { Outlet ,Link } from 'react-router-dom'

const Homelayout = () => {
  return (
   
        <div  className='container mx-auto'> 
        <header>
            <nav>
                <h1 className='text-4xl leading-6 text-red-600 m-2 text-center font-bold p-2'>Fashion Shop</h1>
                <ul className='flex justify-center border'>
                    <li className='p-2 text-lg uppercase'><Link to={"/"}>Trang chủ</Link></li>
                    <li className='p-2 text-lg uppercase'><Link to={"/products"}>products</Link></li>
                    <li className='p-2 text-lg uppercase'><Link to={"/products/:id"}>details products</Link></li>
                    <li className='p-2 text-lg uppercase'><Link to={"/signup"}>đăng ký</Link></li>
                    <li className='p-2 text-lg uppercase'><Link to={"/signin"}>đăng nhập</Link></li>
                    <li className='p-2 text-lg uppercase'><Link to={"/taikhoan"}>Tài khoản</Link></li>
                </ul>
            </nav>
        </header>
        <main className=''>
            <Outlet/>
        </main>
        <footer className='text-center bg-slate-600 text-white p-8 mt-4'>
            PH20072:Nguyễn Trí Thức
        </footer>
    </div>
 
    
  )
}

export default Homelayout