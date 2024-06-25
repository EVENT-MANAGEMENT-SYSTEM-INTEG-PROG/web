"use client"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"

import Link from "next/link"
import { Button } from "../ui/button"
import { CircleUser, Settings, Calendar, LogOut } from "lucide-react"
import { signOut } from "@/auth/auth"

export default function ProfilePopOver() {
    return (
        <Popover>
            <PopoverTrigger asChild className="hover:bg-amber-300">
                <Button variant={"ghost"}>
                    <CircleUser/>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] mx-10">
                <div className="">
                    <div className="flex flex-row my-2 hover:bg-slate-200 rounded py-3 cursor-pointer">
                        <CircleUser className="mx-1"/>
                        <Link href={"/dashboard/profile"}>
                            Profile
                        </Link>
                    </div>

                    <div className="flex flex-row my-2 hover:bg-slate-200 rounded py-3 cursor-pointer">
                        <Calendar className="mx-1"/>
                        <Link href={"/dashboard/profile/events"}>
                            My Event
                        </Link>
                    </div>

                    <div className="flex flex-row my-2 hover:bg-slate-200 rounded py-3 cursor-pointer">
                        <Settings className="mx-1"/>
                        <Link href={"/dashboard/profile/settings"}>
                            Setting
                        </Link>
                    </div>

                    <div className="flex flex-row my-2 hover:bg-slate-200 rounded py-3 cursor-pointer"
                        onClick={async () => await signOut()}>
                        <LogOut className="mx-1"/>
                        <p>Sign Out</p>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}