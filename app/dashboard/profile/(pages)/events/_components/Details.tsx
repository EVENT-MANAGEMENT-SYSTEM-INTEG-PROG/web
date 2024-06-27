"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { cancelEvent } from "../_actions/actions";
import { useRouter } from "next/navigation";


import { useToast } from "@/components/ui/use-toast"

import { Toaster } from "@/components/ui/toaster";


const shareEvent = (event_id: string) => {
    const url = `${window.location.host}/event/${btoa("{event_id: event_id}")}`
    return url
}   

export default function Details({ content }: any) {
    const {event_name, event_description, event_date, event_time, event_status, event_id, event_location, organizer, participants } = content;
    const toast = useToast()
    const router = useRouter()
    const handleSubmit = async () => {
        const data: any = {
            event_name,
            event_description,
            event_date,
            event_time,
            event_location,
            organizer,
            participants,
            event_status: 'cancelled'
        }
        const cancel = await cancelEvent(data, event_id)
    }

    return (
        <>
        <div className="text-right px-1">
        <Toaster/>
        <Dialog>
        <DialogTrigger asChild>
            <Button className="m-1 rounded-full bg-amber-100 text-black p-6 font-bold hover:bg-amber-700 hover:text-white">
                View Event
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Event Details</DialogTitle>
            <DialogDescription>
                {event_name}
            </DialogDescription>
            </DialogHeader>

            <p>Status: {event_status}</p>
            <p>Schedule: {event_date}</p>
            <p>Description: {event_description}</p>

            {
                event_status == 'pending'
                ?
                <Button className="bg-amber-400 hover:bg-amber-500" onClick={() => {
                    const url = shareEvent(event_id)
                    alert(url)
                }}>Invite</Button>
                :
                event_status != 'cancelled'
                ?
                <Button variant={"destructive"} onClick={async () => {
                    handleSubmit()
                    router.refresh()
                }}>Cancel Event</Button>
                :
                <>
                <p>This event has been cancelled</p>
                </>
            }
        </DialogContent>
        </Dialog>
        </div>
        </>
    )
}