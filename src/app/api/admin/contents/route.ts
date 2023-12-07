
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


export async function POST(req: Request, res: NextResponse) {
  if (req.method === 'POST') {
    try {
      const { title, description } = await req.json();

      const dataDirectory = join(process.cwd(), 'about.json');

      // Create a new data object without price and imageLink
      const newData = {
        title,
        description,
      };

      // Write the new data to the file, replacing the old content
      fs.writeFileSync(dataDirectory, JSON.stringify(newData, null, 2));

      // Return the new data or any other response as needed
      return NextResponse.json(newData, { status: 201 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({
        message: 'Failed to create courses',
        status: false,
      });
    }
  } else {
    return NextResponse.error();
  }
}