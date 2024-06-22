import 'server-only';
import { cache } from 'react';
import { verifySession } from './stateless';
import API_URL from '@/constants/constants';

import { cookies } from 'next/headers';

export const getUser = cache(async () => {
    const session = await verifySession()

    const token: any = cookies().get('session')?.value

    try {
        const req: any = await fetch(`${API_URL}/api/user/me`, {
            method: "GET",
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
