
   import { getData, updateData } from "@/services/adminService";
import { NextResponse } from "next/server";
import { join } from "path";

   export async function GET(req:Request, res:NextResponse) {
     if (req.method === 'GET') {
        const dataDirectory = join(process.cwd(), 'about.json');
       const data = getData();
    //    res.status(200).json(data.posts);
    return NextResponse.json(data);
    
     } else {
        return getResponseMessage("error in getting data !!" ,404,false);
     }
   }

   export async function POST(req:Request, res:NextResponse) {
    if (req.method === 'POST') {
      const newPost = req.body;
      const data = getData();
      data.posts.push(newPost);
      updateData(data);
      return NextResponse.json(newPost);
    } else {
        return getResponseMessage("error in getting data !!" ,404,false);
    }
  }

function getResponseMessage(arg0: string, arg1: number, arg2: boolean) {
    throw new Error("Function not implemented.");
}
