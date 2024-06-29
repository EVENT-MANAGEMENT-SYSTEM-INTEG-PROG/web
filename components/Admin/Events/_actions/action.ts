"use server"

import { cookies } from "next/headers"
import API_URL from "@/constants/constants"


const token = cookies().get("session")?.value

export  const allEvents = async () => {
    try {
        const req: any = await fetch(`${API_URL}/api/event`, {
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

export  const approvedEvents = async () => {
    try {
        const req: any = await fetch(`${API_URL}/api/event/assign/organizer/approved`, {
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

export  const cancelledEvents = async () => {
    try {
        const req: any = await fetch(`${API_URL}/api/event/assign/organizer/cancelled`, {
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

export  const pendingEvents = async () => {
    try {
        const req: any = await fetch(`${API_URL}/api/event/assign/organizer/pending`, {
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

export  const NumAllEvents = async () => {
    try {
        const req: any = await fetch(`${API_URL}/api/event/assign/organizer/numallevent`, {
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

export  const NumPendingEvents = async () => {
    try {
        const req: any = await fetch(`${API_URL}/api/event/assign/organizer/numpendingevent`, {
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

export  const NumApprovedEvents = async () => {
    try {
        const req: any = await fetch(`${API_URL}/api/event/assign/organizer/numapprovedevent`, {
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

export  const NumCancelledEvents = async () => {
    try {
        const req: any = await fetch(`${API_URL}/api/event/assign/organizer/numcancelledevent`, {
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