"use server";

import API_URL from "@/constants/constants";
import { createSession, destroySession } from "./stateless";
import { redirect } from 'next/navigation';

export async function signIn(data: any) {

    const req: any = await fetch(`${API_URL}/api/user/login`, {
        method: "POST",
        mode: "cors",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    const res = await req.json()


    if (!req.ok) {
        const message = res.message
        return {message}
    }
    else {
        const token = res.token
        await createSession(token)
    }
}


export async function signUp(data: any) {

    const req: any = await fetch(`${API_URL}/api/user/signup`, {
        method: "POST",
        mode: "cors",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    const res = await req.json()


    if (!req.ok) {
        const message = res.message
        return {message}
    }
    else {
        redirect('/login')
    }
}

export async function signOut() {
    await destroySession()
}