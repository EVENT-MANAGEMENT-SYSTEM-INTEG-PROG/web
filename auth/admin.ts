"use server"

import API_URL from "@/constants/constants";
import { redirect } from "next/navigation";

export async function createEvent(data: any) {
    
    const req: any = fetch(`${API_URL}/event/`, {
        method: "POST",
        mode: "cors",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    const res = await req.json();

    if (!req.ok) {
        const message = res.message();
        return {message}
    } else {
        redirect('/admin/events');
    }
}