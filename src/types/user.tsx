export interface IPeople {
    _id?:string,
    name?: string,
    email: string,
    password?: string|number,
    confirmPassword?:string|number,
    role?:string 
}