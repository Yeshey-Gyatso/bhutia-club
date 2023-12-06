
//admin
// import { httpAxios } from "@/helper/httpHelper";


// export async function adminlogin(LoginData:any){
//     const result = await fetch("/data/file.json")
//     return result
// }
// import fs from 'fs';
// import { join } from 'path';

// const dataDirectory = join(process.cwd(), 'about.json');

// export function getData() {
//   const rawData = fs.readFileSync(dataDirectory);
//   return JSON.parse(rawData);
// }

// export function updateData(newData) {
//   const stringifiedData = JSON.stringify(newData, null, 2);
//   fs.writeFileSync(dataDirectory, stringifiedData);
// }



export async function adminlogin(user:any){
    const validAdminName = 'admin';
    
    const validAdminPassword = 'qwer';
    const { username, password } = user;
    console.log(username)
    if (username === validAdminName && password === validAdminPassword) {
        return true;
      } else {
        
        return false;
      }
  
}