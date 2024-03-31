import { NextResponse } from 'next/server';
import data from 'data/quotes.json';

export const dynamic = 'force-dynamic'; // Otherwise, Next.js will cache this handler's output

const dataSource = 'https://en.wikipedia.org/wiki/AFI%27s_100_Years...100_Movie_Quotes';

export async function GET() {
    const randomId = Math.floor(Math.random() * data.length);
    const item = data[randomId];
    
    return NextResponse.json({
        ...item,
        dataSource
    });
}
