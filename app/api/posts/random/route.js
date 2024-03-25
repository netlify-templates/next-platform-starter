import data from '../../../../data/posts.json';
import { NextResponse } from 'next/server';

export async function GET() {
    const randomId = Math.floor(Math.random() * data.length);
    const post = data.find((item) => randomId === item.id);
    return NextResponse.json({ ...post });
}
