// pages/api/about.js
import fs from 'fs';
import { join } from 'path';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const dataDirectory = join(process.cwd(), 'about.json');
    const rawData = fs.readFileSync(dataDirectory);
    const data = JSON.parse(rawData);
    res.status(200).json(data);
  } else if (req.method === 'POST') {
    const newData = req.body;
    const stringifiedData = JSON.stringify(newData, null, 2);
    const dataDirectory = join(process.cwd(), 'about.json');
    fs.writeFileSync(dataDirectory, stringifiedData);
    res.status(200).json(newData);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
