"use server"

import { cookies } from "next/headers"
import API_URL from "@/constants/constants"


const token = cookies().get("session")?.value

export const Organizers =  async () => {
    

    try {
        const req: any = await fetch(`${API_URL}/api/user/organizers`, {
            method: "GET",
            cache: 'no-store',
            headers: {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
                "Authorization": `Bearer ${token}`,
                "Accept": "application/json"
            }
        })
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        const res = await req.json()


        if(!req.ok) {
            const message = res?.message

            return { message }
        }
        else {
            const data = res

            return data
        }

    } catch (error) {
        console.log('error')
        return null
    }
}

export const bookEvent = async (data: any) => {
    try {
        const req: any = await fetch(`${API_URL}/api/event`, {
            method: "POST",
            headers: {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
                "Authorization": `Bearer ${token}`,
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        })
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        const res = await req.json()


        if(!req.ok) {
            const message = res?.message

            return { message }
        }
        else {
            const data = res

            return data
        }
    } catch (error) {
        const message = error

        return { message }
    }
}


export const myEvent = async () => {
    try {
        const req: any = await fetch(`${API_URL}/api/user/events`, {
            cache: 'no-store',
            method: "GET",
            headers: {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
                "Authorization": `Bearer ${token}`,
                "Content-type": "application/json",
                "Accept": "application/json"
            }

        })                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        const res = await req.json()

        if(!req.ok) {
            const message = res?.message

            return { message }
        }
        else {
            const data = res

            return data
        }
    } catch (error) {
        const message = error

        return { message }
    }
}