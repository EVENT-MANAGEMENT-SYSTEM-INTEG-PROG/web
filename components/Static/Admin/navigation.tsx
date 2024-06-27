import SideBar from "@/components/Static/Admin/Sidebar/sidebar";
import Link from "next/link";
import { Bell, Mail } from "lucide-react";
import { Staatliches } from "next/font/google";

import { cn } from "@/lib/utils";


const staat = Staatliches({
    subsets: ['latin'],
    variable: "--font-sans",
    weight: "400",
})

export default function NavigationBar() {
    return (
        <nav className="flex justify-between h-[10vh] px-5 py-3">
                <div className="flex">
                    <SideBar />
                    <p className={cn(staat.variable, "font-sans ml-8 my-auto text-3xl")}>{}</p>
                </div>
        </nav>
    );
}