"use server"
import { verifySession } from "./stateless"
import API_URL from "@/constants/constants"
import { cookies } from "next/headers"


export const isAdmin = (async () => {
    const session = await verifySession()

    const token: any = cookies().get('session')?.value

    try {
        const req: any = await fetch(`${API_URL}/api/user/me`, {
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
})

export const updateUser = (
    async (data: any) => {
        const { cookies } = await import('next/headers')

        const session = await verifySession()
        const token: any = cookies().get('session')?.value
        try {
            const req: any = await fetch(`${API_URL}/api/user/me`, {
                method: "PATCH",
                headers: {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
                    "Authorization": `Bearer ${token}`,
                    "Accept": "application/json",
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
            const res = await req.json()

    
            if(!req.ok) {
                const message = res?.message
                return { message }
            }
            else {
                const message = res?.message
                return { message }
            }
        } catch (error) {
            console.log('error')
            return null
        }
    }
)