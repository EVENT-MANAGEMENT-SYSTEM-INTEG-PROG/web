"use server"


import API_URL from "@/constants/constants"
import { cookies } from "next/headers"


const token: any = cookies().get('session')?.value

export const assignEvent = async () => {

    try {
        const req: any = await fetch(`${API_URL}/api/event/assign/organizer`, {
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
        const message = error

        return { message }
    }
}