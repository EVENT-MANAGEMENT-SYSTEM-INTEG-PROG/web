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
import { assignEvent } from "@/components/NavigationBar/_actions/action"
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils"

const popp = Poppins({
    subsets: ['latin'],
    variable: "--font-sans",
    weight: "600",
})

const organizerNames = [
    {
      organizerName: "Enchanted Gatherings",
      eventName: "Hogwarts House",
      eventType: "Themed Dinner and Dance",
      status: "Completed",
      date: "June 24, 2024",
    },
    {
      organizerName: "CineMagic Events",
      eventName: "Wizarding World Fair",
      eventType: "Fair and Market",
      status: "Missing",
      date: "june",
    },
    {
      organizerName: "Fantasia Creations",
      eventName: "Night at the Shire",
      eventType: "Lord of the Rings",
      status: "Completed",
      date: "june",
    },
  ]

const totals = [
    {
        TotalRequest: "900",
        Confirmed: "200",
        TotalRequest1: "900",
        TotalRequest2: "900",
        TotalRequest3: "900",
        TotalRequest4: "823"
    }
]

export default async function EventsTable() {

    const event = await assignEvent()

    return (
        <>
            {totals.map((TotalRequest) => (
                <div key={TotalRequest.TotalRequest} className="flex justify-around py-5 px-12 w-full">
                    <div className="flex bg-gray-200 text-black items-center border-l-4 border-blue-400 px-3 py-5">
                        <p className="text-md text-center mr-2">{TotalRequest.TotalRequest}</p>
                        <p className="text-sm">Total Request</p>
                    </div>
                    <div className="flex bg-gray-200 text-black items-center border-l-4 border-green-500 px-3 py-5">
                        <p className="text-md text-center mr-2">{TotalRequest.Confirmed}</p>
                        <p className="text-sm">Confirmed</p>
                    </div>
                    <div className="flex bg-gray-200 text-black items-center border-l-4 border-yellow-400 px-3 py-5">
                        <p className="text-md text-center mr-2">{TotalRequest.TotalRequest1}</p>
                        <p className="text-sm">Total Request</p>
                    </div>
                    <div className="flex bg-gray-200 text-black items-center border-l-4 border-pink-400 px-3 py-5">
                        <p className="text-md text-center mr-2">{TotalRequest.TotalRequest2}</p>
                        <p className="text-sm">Total Request</p>
                    </div>
                    <div className="flex bg-gray-200 text-black items-center border-l-4 border-gray-500 px-3 py-5">
                        <p className="text-md text-center mr-2">{TotalRequest.TotalRequest3}</p>
                        <p className="text-sm">Total Request</p>
                    </div>
                    <div className="flex bg-gray-200 text-black items-center border-l-4 border-red-300 px-3 py-5">
                        <p className="text-md text-center mr-2">{TotalRequest.TotalRequest4}</p>
                        <p className="text-sm">Total Request</p>
                    </div>
                </div>
            ))}
            <Tabs defaultValue="all" className={cn(popp.variable,"font-sans")}>
                <TabsList className="border-0 bg-transparent">
                    <TabsTrigger className="bg-white data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:bg-white rounded-none" value="all">All</TabsTrigger>
                    <TabsTrigger className="ml-3 bg-white data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:bg-white rounded-none" value="published">Published</TabsTrigger>
                    <TabsTrigger className="ml-3 bg-white data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:bg-white rounded-none" value="draft">Draft</TabsTrigger>
                </TabsList>
                <TabsContent value="all">
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
                </TabsContent>
                <TabsContent value="published">
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
                </TabsContent>
                <TabsContent value="draft">
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
                </TabsContent>
            </Tabs>
        </>
    );
}