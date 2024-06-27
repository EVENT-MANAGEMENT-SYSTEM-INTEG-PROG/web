import Navbar from "@/components/Static/NavBar";
import { Poppins } from "next/font/google";
import DashboardFirstSection from "@/components/Admin/Dashboard/firstsection";
import DashboardSecondSection from "@/components/Admin/Dashboard/secondsection";
import DashboardThirdSection from "@/components/Admin/Dashboard/thirdsection";

import { cn } from "@/lib/utils";

const popp = Poppins({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: "500"
})

export default function AdminDashboard() {
    return (
        <>
            <div className={cn(popp.variable, "font-sans pl-[8%] py-10")}>
                <p className="text-2xl">Welcome, Admin</p>
                <p className="text-sm">Have a good day!</p>
            </div>
            <DashboardFirstSection />
            <DashboardSecondSection />
            <DashboardThirdSection />
        </>
    );
}