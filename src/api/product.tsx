import instance from "./instance";
import { IProduct } from "../types/product";


const getAllProduct = () => {
    return instance.get('/products')
}

const getOneProduct = (_id:number |string) => {
    return instance.get(`/products/${_id}`)
}

const addProduct = (product: IProduct) =>{
    const {accessToken} = JSON.parse(localStorage.getItem('user')!);
    return instance.post(`products`,product, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}

const deleteProduct = (_id:number|string) =>{
    // console.log("id",_id);
    const {accessToken} = JSON.parse(localStorage.getItem('user')!);
    console.log("token",accessToken);
    return instance.delete(`products/${_id}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
};

const updateProduct = (product: IProduct) =>{
    
    const {accessToken} = JSON.parse(localStorage.getItem('user')!);
    console.log("token",accessToken);
    return instance.put(`/products/${product._id}`, product, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}

export {getAllProduct, getOneProduct, addProduct, deleteProduct, updateProduct}