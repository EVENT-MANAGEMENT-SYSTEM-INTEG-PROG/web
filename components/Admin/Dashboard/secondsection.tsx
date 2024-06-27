"use client"
import Link from "next/link";

import { Montserrat } from "next/font/google";

import { cn } from "@/lib/utils";

const mont = Montserrat({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: "600"
})

export default function DashboardSecondSection() {
    return (
        <div className="flex flex-row justify-around w-full pt-12 pb-8 pr-[24vw] pl-[6vw]">
            <div className="flex flex-col">
                <div className="flex justify-between w-[40vw]">
                    <p className="text-gray-300">Events</p>
                    <Link href="" className="text-amber-500 hover:text-gray-300">See all</Link>
                </div>
                <div>

                </div>
            </div>
            <div className={cn(mont.variable, "font-sans text-2xl")}>
                Upcoming
            </div>
        </div>
    );
}