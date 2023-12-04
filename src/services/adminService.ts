//admin
// import { httpAxios } from "@/helper/httpHelper";


// export async function adminlogin(LoginData:any){
//     const result = await fetch("/data/file.json")
//     return result
// }


export async function adminlogin(user:any){
    const validAdminName = 'mellow';
    
    const validAdminPassword = 'qwer';
    const { username, password } = user;
    console.log(username)
    if (username === validAdminName && password === validAdminPassword) {
        return true;
      } else {
        
        return false;
      }
  
}