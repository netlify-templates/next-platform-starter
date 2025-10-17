import { revalidateTag, revalidatePath } from 'next/cache';

export const dynamic = 'force-dynamic'; // or 'auto' — for demo clarity

let cachedMessage = 'Hello from Next.js 16 + Netlify!';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get('action');

  if (action === 'refresh') {
    // Demonstrate cache invalidation
    cachedMessage = `Refreshed at ${new Date().toLocaleTimeString()}`;
    revalidateTag('hello');
    revalidatePath('/api/hello');
  }

  return Response.json(
    {
      message: cachedMessage,
      timestamp: new Date().toISOString(),
    },
    {
      headers: {
        // Use the new caching directives
        'Cache-Control': 'public, must-revalidate',
        'Netlify-CDN-Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30, durable',
      },
    },
  );
}