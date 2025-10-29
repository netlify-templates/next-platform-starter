import { NextResponse } from 'next/server';

export function middleware(request) {
  const response = NextResponse.next();
  
  // Add security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Add custom header to track middleware execution
  response.headers.set('X-Middleware-Executed', 'true');
  
  const pathname = request.nextUrl.pathname;
  
  // Logging for demonstration (in production, use proper logging service)
  console.log(`[Middleware] ${request.method} ${pathname} - ${new Date().toISOString()}`);
  
  // Example: Block access to /admin paths (demonstration only)
  if (pathname.startsWith('/admin')) {
    const url = request.nextUrl.clone();
    url.pathname = '/';
    response.headers.set('X-Blocked-Path', pathname);
    return NextResponse.redirect(url);
  }
  
  // Example: Add custom header for API routes
  if (pathname.startsWith('/api/') || pathname.startsWith('/quotes/')) {
    response.headers.set('X-API-Version', '1.0');
  }
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.svg (favicon file)
     * - public files (images, etc.)
     */
    '/((?!_next/static|_next/image|favicon.svg|images|.*\\.svg|.*\\.png|.*\\.jpg).*)',
  ],
};
