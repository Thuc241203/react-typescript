import React, { useEffect, useState } from 'react';
import { IProduct } from '../types/product';
import { getAllProduct } from '../api/product';
import { IPeople } from '../types/user';
import { getUser } from '../api/auth';

const Taikhoan = () => {
//   const [users, setUsers] = useState<IPeople[]>([]);

//   useEffect(() => {
//     getUser().then(users)=> setUsers(users)
//   }, []);

//   console.log(users);

  return (
    <div>
        tài khoản
    </div>
  );
}

export default Taikhoan;