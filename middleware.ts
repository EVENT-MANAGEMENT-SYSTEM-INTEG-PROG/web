import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { isAdmin } from './auth/userAction';

const protectedRoutes = ['/dashboard', '/dashboard/profile'];
const publicRoutes = ['/'];
const userCreateRoutes = ['/login', '/register'];

const adminRoutes = ['/dashboard/admin'];


export default async function middleware(req:NextRequest) {

    const path = req.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.includes(path);
    const isPublicRoute = publicRoutes.includes(path);
    const isuserCreateRoutes = userCreateRoutes.includes(path);

    const isadminRoutes = adminRoutes.includes(path);

    const isSign = cookies().get('isSign')?.value;

    const user = await isAdmin()



    if(isuserCreateRoutes && isSign) {
        return NextResponse.redirect(new URL('/dashboard/profile', req.nextUrl) );
    }

    if(req.nextUrl.pathname.startsWith('/dashboard') && !isSign) {
        return NextResponse.redirect(new URL('/login', req.nextUrl) );
    }

    if(req.nextUrl.pathname.startsWith('/dashboard/admin') && user.role_id == 2 ) {
        return NextResponse.redirect(new URL('/login', req.nextUrl) );
    }
      
    


    return NextResponse.next();

}