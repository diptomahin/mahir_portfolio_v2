import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'data', 'portfolio.json');

export async function GET() {
  try {
    const fileContents = fs.readFileSync(dataPath, 'utf8');
    const data = JSON.parse(fileContents);
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: 'Failed to read portfolio data' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ error: 'Failed to save portfolio data' }, { status: 500 });
  }
}
