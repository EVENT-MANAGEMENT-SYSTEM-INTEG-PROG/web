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
import { manageEvent, makeSchedule } from "../../profile/(pages)/events/_actions/actions";
import { useRouter } from "next/navigation";


import { useToast } from "@/components/ui/use-toast"

import { Toaster } from "@/components/ui/toaster";
import { Textarea } from "@/components/ui/textarea";


const shareEvent = (event_id: string) => {
    const url = `${window.location.host}/event/${btoa("{event_id: event_id}")}`
    return url
}   

export default function Details({ content }: any) {
    const {event_name, event_description, event_date, event_time, event_status, event_id, event_location, organizer, participants, } = content;
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
        const cancel = await manageEvent(data, event_id)
    }

    const handleApproveSubmit = async () => {
        const data: any = {
            event_name,
            event_description,
            event_date,
            event_time,
            event_location,
            organizer,
            participants,
            event_status: 'approved'
        }

        const approve = await manageEvent(data, event_id)


        const sched : any = {
            event_id,
            schedule_date: event_date
        }

        const schedule = await makeSchedule(sched)
        
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
        <DialogContent className="border-amber-400">
            <DialogHeader>
            <DialogTitle>Event Details</DialogTitle>
            <DialogDescription>
                {event_name}
            </DialogDescription>
            </DialogHeader>

            <p>Status: {event_status}</p>
            <p>Schedule: {event_date}</p>
            <p>Description: {event_description}</p>

            <Textarea disabled value={participants}/>
            <DialogDescription>
                You can't send invitation via email if the event has not been approved.
            </DialogDescription>

            {
                event_status == 'approved'
                ?
                <>
                    <Button className="bg-amber-400 hover:bg-amber-500" onClick={() => {
                        const url = shareEvent(event_id)
                        alert(url)
                    }}>Invite</Button>
                </>
                :
                event_status != 'cancelled'
                ?
                <>
                <Button variant={"destructive"} onClick={async () => {
                    handleSubmit()
                    router.refresh()
                }}>Cancel Event</Button>
                <Button variant={"default"} className="bg-green-500 hover:bg-green-700" onClick={async () => {
                    handleApproveSubmit()
                    router.refresh()
                }}>Approve Event</Button>
                </>
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