import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate} from 'react-router-dom';
import { login, signup } from '../api/auth';
import { IProduct } from '../types/product';
import { IPeople } from '../types/user';
type IProps = {
  onAdd:(users: IPeople) => void,
}

const Singup = (props: IProps) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState : {errors},
  } = useForm()
  const onHandleSubmit = async ( data:any) => {
      const {data: user}= await signup(data);
      localStorage.setItem("user",JSON.stringify(user));
      navigate("/HomePage");
  }
  return (
    <div className='text-center '> <h1 className='text-3xl p-2 m-2'>Đăng ký tài khoản</h1>
      <form className='border-2 rounded' action="" onSubmit={handleSubmit(onHandleSubmit)}>
        Name: <br /> <input className='border-2 rounded border-black' type="name" /><br />
        Email: <br /> <input className='border-2 rounded border-black' type="email" {...register('email')} /> <br />
        Password: <br /> <input className='border-2 rounded border-black' type="password" {...register('password')} /> <br />
        ConfirmPassword: <br /> <input className='border-2 rounded border-black' type="Password" {...register('confirmPassword')} /> <br />
        <button className='border-2 p-2 m-2 rounded border-black text-white bg-sky-500 hover:bg-sky-800 ' >đăng ký</button>
      </form>
    </div>
  )
}

export default Singup