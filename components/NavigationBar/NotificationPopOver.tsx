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


    return (
        <>
        <Popover>
            <PopoverTrigger asChild className="mx-5 ">
                <Button variant={"ghost"} className="hover:bg-amber-300">
                    <Bell/>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[350px] mx-10">
            </PopoverContent>
        </Popover>
        </>
    )


}