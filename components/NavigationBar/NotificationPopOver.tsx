import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"

import Link from "next/link"
import { Button } from "../ui/button"
import { Bell, CircleAlert } from "lucide-react"

import { assignEvent } from "./_actions/action"
import { cookies } from "next/headers"


export default async function NotificationPopOver() {

    const organizerEvent  = await assignEvent()

    console.log(organizerEvent)
    const isParticipant = cookies().get("participant")?.value
    

    if (isParticipant) {
        return (
            <Popover>
            <PopoverTrigger asChild className="mx-5 ">
                <Button variant={"ghost"} className="hover:bg-amber-300">
                    <Bell/>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[350px] mx-10">
                <div>
                <div className="flex flex-row my-2 hover:bg-slate-200 rounded py-3 items-center">
                        <CircleAlert className="mx-1"/>
                        <Link href={"/dashboard/profile"}>
                            Someone picked you for their event!
                        </Link>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
        )
    }

    else {
        
        return (
            <>
            <Popover>
                <PopoverTrigger asChild className="mx-5 ">
                    <Button variant={"ghost"} className="hover:bg-amber-300">
                        <Bell/>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[350px] mx-10">
                    <div>
    
                    {
                    
                    organizerEvent.map((content: any, key: any) => {
                        return (
                        <div className="flex flex-row my-2 hover:bg-slate-200 rounded py-3 items-center" key={key}>
                            <CircleAlert className="mx-1"/>
                            <Link href={"/dashboard/profile"}>
                                Someone picked you for their event!
                            </Link>
                        </div>
                        )
                    })
    
                    }
    
                    </div>
                </PopoverContent>
            </Popover>
            </>
        )
    }


}