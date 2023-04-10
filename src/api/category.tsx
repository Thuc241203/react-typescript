import instance from "./instance";
import { ICategory } from "../types/category";


const getAllCategories = () => {
    return instance.get('/categories')
}

const getOneCategories = (_id:string) => {
    return instance.get(`/categories/${_id}`)
}

const addCategories = (category: ICategory) =>{
    const {accessToken} = JSON.parse(localStorage.getItem('user')!);
    return instance.post(`categories`,category, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}

const deleteCategories = (_id:string) =>{
    // console.log("id",_id);
    const {accessToken} = JSON.parse(localStorage.getItem('user')!);
    console.log("token",accessToken);
    return instance.delete(`categories/${_id}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
};

const updateCategories = (category: ICategory) =>{
    
    const {accessToken} = JSON.parse(localStorage.getItem('user')!);
    console.log("token",accessToken);
    return instance.put(`/categories/${category._id}`, category, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}

export {getAllCategories, getOneCategories, addCategories, deleteCategories, updateCategories}