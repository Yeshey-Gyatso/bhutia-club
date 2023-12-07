
import fs from 'fs';
import { NextResponse } from 'next/server';
import { join } from 'path';

export async function GET(req:Request, res:NextResponse) {
  if (req.method === 'GET') {
    const dataDirectory = join(process.cwd(), 'about.json');
    const rawData = fs.readFileSync(dataDirectory, 'utf-8');
    const data = JSON.parse(rawData);
    return NextResponse.json(data)
  } else {
   return NextResponse.error(); 
  }
}


export async function POST(req: Request, res: NextResponse) {
  if (req.method === 'POST') {
    try {
      const { title1, description1,title2, description2,
      btitle1, bdescription1,btitle2, bdescription2 } = await req.json();

      const dataDirectory = join(process.cwd(), 'about.json');

      // Create a new data object without price and imageLink
      const newData = {
        title1, description1,title2, description2,
      btitle1, bdescription1,btitle2, bdescription2
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



export async function PUT(req: Request, res: NextResponse) {
  if (req.method === 'PUT') {
    try {
      const {  title1, description1,title2, description2,
        btitle1, bdescription1,btitle2, bdescription2 } = await req.json();

      const dataDirectory = join(process.cwd(), 'about.json');

      // Check if the file exists
      if (!fs.existsSync(dataDirectory)) {
        return NextResponse.json({
          message: 'Resource not found',
          status: false,
        });
      }

      // Read existing data from the file
      const existingData = JSON.parse(fs.readFileSync(dataDirectory, 'utf-8'));

      // Update the existing data with new values
      existingData.title1 = title1;
      existingData.description1 = description1;
      existingData.title1 = title2;
      existingData.description1 = description2;
      existingData.btitle1 = btitle1;
      existingData.bdescription1 = bdescription1;
      existingData.btitle1 = btitle2;
      existingData.bdescription1 = bdescription2;

      // Write the updated data back to the file
      fs.writeFileSync(dataDirectory, JSON.stringify(existingData, null, 2));

      // Return the updated data or any other response as needed
      return NextResponse.json(existingData, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({
        message: 'Failed to update resource',
        status: false,
      });
    }
  } else {
    return NextResponse.error();
  }
}