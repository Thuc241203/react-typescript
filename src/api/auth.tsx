import instance from "./instance";
import { IPeople } from "../types/user";


const signup = (user: IPeople) => {
    return instance.post("/singup", user);
}
const login = (user: IPeople) => {
    return instance.post('/signin', user);
}

const getUser = (_id:string)=> {
    return instance.get<IPeople>(`/check/${_id}`);
}
export { signup , login, getUser}