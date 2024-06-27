"use client"
import * as React from 'react'
import { Calendar } from "@/components/ui/calendar"
import Link from 'next/link'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { Video } from 'lucide-react'

import { cn } from '@/lib/utils'

const popp = Poppins({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: "400"
})

const p = Poppins({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: "600"
})

export default function DashboardFirstSection() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <div className="flex justify-around px-[8%] h-[65vh]"> 
            <div className="w-full">
                <Image
                    className="absolute"
                    src="/i7.png"
                    alt=""
                    height={600}
                    width={638}
                />
                <div className={cn(popp.variable, "font-sans relative flex flex-col justify-end h-full pl-5 pr-12 pb-7")}>
                    <div className="my-10 pl-5 text-3xl">
                        <p>A smart way to reach the right</p>
                        <p className="pl-12">management.</p>
                    </div>
                    <Link href="/dashboard/admin/events" className="flex rounded-md bg-yellow-500 px-5 py-3 w-[15vw] text-center text-black hover:bg-black hover:text-white"><Video className="mr-2" />Create an Event</Link>
                </div>
            </div>
            <div className="flex justify-end w-full">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className={cn(p.variable, "font-sans")}
                    classNames={{
                        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                        month: "space-y-10",
                        caption: "flex justify-center pt-1 relative items-center",
                        caption_label: "text-4xl font-medium",
                        nav: "space-x-1 flex items-center",
                        nav_button_previous: "absolute left-1",
                        nav_button_next: "absolute right-1",
                        table: "w-full border-collapse space-y-2",
                        head_row: "flex",
                        head_cell:
                        "text-muted-foreground rounded-md w-[60px] font-normal text-[0.8rem] text-yellow-500",
                        row: "flex w-full mt-4",
                        cell: "h-9 w-[60px] text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                        day_range_end: "day-range-end",
                        day_selected:
                        "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                        day_today: "bg-yellow-500 text-accent-foreground",
                        day_outside:
                        "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
                        day_disabled: "text-muted-foreground opacity-50",
                        day_range_middle:
                        "aria-selected:bg-accent aria-selected:text-accent-foreground",
                        day_hidden: "invisible",
                    }}
                />
            </div>
        </div>
    );
}