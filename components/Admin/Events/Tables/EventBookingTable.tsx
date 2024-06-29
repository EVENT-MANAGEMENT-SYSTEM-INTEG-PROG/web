import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import Details from "@/app/dashboard/organizer/_components/Details";
import { allEvents, approvedEvents, cancelledEvents, pendingEvents, NumAllEvents, NumPendingEvents, NumApprovedEvents, NumCancelledEvents } from "@/components/Admin/Events/_actions/action";
import { Poppins } from "next/font/google";
import { ScrollArea } from "@/components/ui/scroll-area";

import { cn } from "@/lib/utils"

const popp = Poppins({
    subsets: ['latin'],
    variable: "--font-sans",
    weight: "600",
})

const organizerNames = [
    {
        organizerName: "Epic Events",
        eventName: "Galactic Adventure Gala",
        eventType: "Star Wars Charity Ball",
        status: "Completed",
        date: "June 24, 2024",
    },
    {
        organizerName: "Nostalgia Nights",
        eventName: "Jurassic Jungle",
        eventType: "Jurassic Park",
        status: "Missing",
        date: "june",
        },
    {
        organizerName: "Fantasy Festivities",
        eventName: "Narnia Winter",
        eventType: "Chronicles of Narnia-Themed",
        status: "Completed",
        date: "june",
    },
    {
        organizerName: "Spellbound Events",
        eventName: "Diagon Alley Experience",
        eventType: "Harry Potter Dining Event",
        status: "Completed",
        date: "june",
    },
]

export default async function EventBookingTable() {

    const event = await allEvents()

    const alleventnum = await NumAllEvents()
    const pendingeventnum = await NumPendingEvents()
    const approvedeventnum = await NumApprovedEvents()
    const cancelledeventnum = await NumCancelledEvents()

    console.log(alleventnum)

    const totals = [
        {
            AllEvents: alleventnum,
            Pending: pendingeventnum,
            Approved: approvedeventnum,
            Cancelled: cancelledeventnum,
            TotalRequest3: "900",
            TotalRequest4: "823"
        }
    ]

    return (
        <>
            {totals.map((TotalRequest) => (
                <div key={TotalRequest.AllEvents} className="flex justify-around py-5 px-12 w-full">
                    <div className="flex bg-gray-200 text-black items-center border-l-4 border-blue-400 px-3 py-5">
                        <p className="text-md text-center mr-2">{TotalRequest.AllEvents}</p>
                        <p className="text-sm">Total Events</p>
                    </div>
                    <div className="flex bg-gray-200 text-black items-center border-l-4 border-green-500 px-3 py-5">
                        <p className="text-md text-center mr-2">{TotalRequest.Pending}</p>
                        <p className="text-sm">Pending</p>
                    </div>
                    <div className="flex bg-gray-200 text-black items-center border-l-4 border-yellow-400 px-3 py-5">
                        <p className="text-md text-center mr-2">{TotalRequest.Approved}</p>
                        <p className="text-sm">Approved</p>
                    </div>
                    <div className="flex bg-gray-200 text-black items-center border-l-4 border-pink-400 px-3 py-5">
                        <p className="text-md text-center mr-2">{TotalRequest.Cancelled}</p>
                        <p className="text-sm">Cancelled</p>
                    </div>
                </div>
            ))}
            <Tabs defaultValue="all" className={cn(popp.variable,"font-sans")}>
                <TabsList className="border-0 bg-transparent">
                    <TabsTrigger className="bg-white data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:bg-white rounded-none" value="all">List of Events</TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                    <ScrollArea className="h-[500px] pb-8">
                    <div className="bg-white text-black rounded m-10">
                        <Table className="rounded-xl">
                            <TableCaption>An Events you have managed.</TableCaption>
                            <TableHeader>
                                <TableRow>
                                <TableHead className="w-[200px]">Event Name</TableHead>
                                <TableHead >Status</TableHead>
                                <TableHead>Location</TableHead>
                                <TableHead className="">Schedule</TableHead>
                                <TableHead className="text-right">Schedule</TableHead>  
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {
                                    event.map((content: any, key: any) => {
                                        return (
                                            <>
                                            <TableRow key={key}>
                                                <TableCell className="font-medium">{content.event_name}</TableCell>
                                                <TableCell>{content.event_status}</TableCell>
                                                <TableCell>{content.event_location}</TableCell>
                                                <TableCell>{content.event_date}</TableCell>
                                                <TableCell>
                                                    <Details content={content}/>
                                                </TableCell>
                                            </TableRow>
                                            </>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    </div>
                    </ScrollArea>
                </TabsContent>
            </Tabs>
        </>
    );
}