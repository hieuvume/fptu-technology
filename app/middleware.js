import { hasCookie } from 'cookies-next';
import { NextResponse } from 'next/server';

export function middleware(req) {
  const res = NextResponse.next();

  const isLogged = hasCookie('access_token', { req, res })

  console.log(isLogged);

  if (isLogged && authRoutes.includes(req.nextUrl.pathname)) {
    return Response.redirect(new URL('/', req.url))
  }

  if (!isLogged && privateRoutes.includes(req.nextUrl.pathname)) {
    return Response.redirect(new URL('/login', req.url))
  }

  return res;
}


const privateRoutes = ['/profile']
const authRoutes = ['/login', '/register', '/password']

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}