import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';

export const metadata = {
    title: 'Middleware'
};

const explainer = `
[Next.js Middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware) runs before every request is completed, allowing you to modify the request and response. This is useful for adding security headers, logging, authentication, and more.

This site demonstrates middleware with several features:

- **Security headers**: Every response includes \`X-Frame-Options\`, \`X-Content-Type-Options\`, and \`Referrer-Policy\` headers
- **Request logging**: All requests are logged with timestamp and method
- **Path protection**: Attempts to access \`/admin\` paths are automatically redirected to the homepage
- **API versioning**: API routes receive an \`X-API-Version\` header

Try accessing \`/admin\` to see the redirect in action. Check your browser's network inspector to see the security headers on this page's response.
`;

const codeSnippet = `
~~~js
// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const response = NextResponse.next();
  
  // Add security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  const pathname = request.nextUrl.pathname;
  
  // Block access to /admin paths
  if (pathname.startsWith('/admin')) {
    const url = request.nextUrl.clone();
    url.pathname = '/';
    return NextResponse.redirect(url);
  }
  
  return response;
}
~~~
`;

export default function Page() {
    return (
        <>
            <ContextAlert className="mb-6" />
            <h1 className="mb-8">Middleware</h1>
            <Markdown content={explainer} className="mb-8" />
            <Markdown content={codeSnippet} />
        </>
    );
}
