
import fs from 'fs';
import { NextResponse } from 'next/server';
import { join } from 'path';

export async function GET(req:Request, res:NextResponse) {
  if (req.method === 'GET') {
    const dataDirectory = join(process.cwd(), 'about.json');
    const rawData = fs.readFileSync(dataDirectory);
    const data = JSON.parse(rawData);
    return NextResponse.json(data)
  } else {
   return NextResponse.error(); // Method Not Allowed
  }
}


export async function POST(req:Request, res:NextResponse) {
  if (req.method === 'POST') {
    const newData = req.body;
    const stringifiedData = JSON.stringify(newData, null, 2);
    const dataDirectory = join(process.cwd(), 'about.json');
    fs.writeFileSync(dataDirectory, stringifiedData);
        return NextResponse.json(newData);
  } else {
   return NextResponse.error(); 
  }
}
