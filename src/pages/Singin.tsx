import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth'

type Props = {}

const Singin = (props: Props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState : {errors},
  } = useForm()
  const onHandleSubmit = async ( data:any) => {
      const {data: user}= await login(data);
      console.log("user",user);
      localStorage.setItem("user",JSON.stringify(user));
      navigate("/taikhoan");
  }
  return (
    <div className='text-center '> <h1 className='text-3xl p-2 m-2'>Đăng nhập</h1>
      <form className='border-2 rounded' action="" onSubmit={handleSubmit(onHandleSubmit)}>
        Email: <br /> <input className='border-2 rounded border-black' type="email" {...register('email')} /> <br />
        Password: <br /> <input className='border-2 rounded border-black' type="password" {...register('password')} /> <br />
        <button className='border-2 p-2 m-2 rounded border-black text-white bg-sky-500 hover:bg-sky-800 ' >login</button>
      </form>
    </div>
  )
}

export default Singin