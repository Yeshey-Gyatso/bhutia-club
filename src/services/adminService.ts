//admin
// import { httpAxios } from "@/helper/httpHelper";


// export async function adminlogin(LoginData:any){
//     const result = await fetch("/data/file.json")
//     return result
// }
import jwt from 'jsonwebtoken';

export async function adminlogin(user:any){
    const validAdminName = 'mellow';
    const validAdminPassword = 'qwer';
    const { name, password } = user;

    if (name === validAdminName && password === validAdminPassword) {
        return true;
      } else {
        
        return false;
      }
  
}