import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const protectedRoutes = ['/dashboard'];
const publicRoutes = ['/'];
const userCreateRoutes = ['/login', '/register'];


export default async function middleware(req:NextRequest) {

    const path = req.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.includes(path);
    const isPublicRoute = publicRoutes.includes(path);
    const isuserCreateRoutes = userCreateRoutes.includes(path);

    const isSign = cookies().get('isSign')?.value;


    if(isuserCreateRoutes && isSign) {
        return NextResponse.redirect(new URL('/dashboard/profile', req.nextUrl) );
    }

    if(isProtectedRoute && !isSign) {
        return NextResponse.redirect(new URL('/login', req.nextUrl) );
    }

    return NextResponse.next();

}