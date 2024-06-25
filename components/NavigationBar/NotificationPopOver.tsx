import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"

import Link from "next/link"
import { Button } from "../ui/button"
import { Bell } from "lucide-react"

export default function NotificationPopOver() {
    return (
        <>
        <Popover>
            <PopoverTrigger asChild className="mx-5 ">
                <Button variant={"ghost"} className="hover:bg-amber-300">
                    <Bell/>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] mx-10">
                <div>
                    <div className="flex flex-row my-2 hover:bg-slate-200 rounded py-3">
                            <Bell className="mx-1"/>
                            <Link href={"/dashboard/profile"}>
                                Profile
                            </Link>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
        </>
    )
}