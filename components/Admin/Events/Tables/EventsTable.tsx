import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,} from "@/components/ui/table";
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

export default function EventsTable() {
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
                    <Table>
                        <TableHeader>
                            <TableRow>
                            <TableHead className="w-[300px]">Organizer Name</TableHead>
                            <TableHead>Event Name</TableHead>
                            <TableHead>Event Type</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead> </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {organizerNames.map((organizerName) => (
                            <TableRow key={organizerName.organizerName}>
                                <TableCell className="font-medium">{organizerName.organizerName}</TableCell>
                                <TableCell>{organizerName.eventName}</TableCell>
                                <TableCell>{organizerName.eventType}</TableCell>
                                <TableCell>{organizerName.status}</TableCell>
                                <TableCell>{organizerName.date}</TableCell>
                                <TableCell>
                                    <button className="bg-blue-600 hover:bg-blue-800 text-white py-1 px-2 rounded">View details</button>
                                    <button className="bg-yellow-500 hover:bg-yellow-700 text-white py-1 px-2 rounded">Edit</button>
                                    <button className="bg-red-600 hover:bg-red-800 text-white py-1 px-2 rounded">Delete</button>
                                </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TabsContent>
                <TabsContent value="published">
                    <Table>
                        <TableHeader>
                            <TableRow>
                            <TableHead className="w-[300px]">Organizer Name</TableHead>
                            <TableHead>Event Name</TableHead>
                            <TableHead>Event Type</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead> </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {organizerNames.map((organizerName) => (
                            <TableRow key={organizerName.organizerName}>
                                <TableCell className="font-medium">{organizerName.organizerName}</TableCell>
                                <TableCell>{organizerName.eventName}</TableCell>
                                <TableCell>{organizerName.eventType}</TableCell>
                                <TableCell>{organizerName.status}</TableCell>
                                <TableCell>{organizerName.date}</TableCell>
                                <TableCell>
                                    <button className="bg-blue-600 hover:bg-blue-800 text-white py-1 px-2 rounded">View details</button>
                                    <button className="bg-yellow-500 hover:bg-yellow-700 text-white py-1 px-2 rounded">Edit</button>
                                    <button className="bg-red-600 hover:bg-red-800 text-white py-1 px-2 rounded">Delete</button>
                                </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TabsContent>
                <TabsContent value="draft">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[300px]">Organizer Name</TableHead>
                                <TableHead>Event Name</TableHead>
                                <TableHead>Event Type</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead> </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                        {organizerNames.map((organizerName) => (
                            <TableRow key={organizerName.organizerName}>
                                <TableCell className="font-medium">{organizerName.organizerName}</TableCell>
                                <TableCell>{organizerName.eventName}</TableCell>
                                <TableCell>{organizerName.eventType}</TableCell>
                                <TableCell>{organizerName.status}</TableCell>
                                <TableCell>{organizerName.date}</TableCell>
                                <TableCell>
                                    <button className="bg-blue-600 hover:bg-blue-800 text-white py-1 px-2 rounded">View details</button>
                                    <button className="bg-yellow-500 hover:bg-yellow-700 text-white py-1 px-2 rounded">Edit</button>
                                    <button className="bg-red-600 hover:bg-red-800 text-white py-1 px-2 rounded">Delete</button>
                                </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TabsContent>
            </Tabs>
        </>
    );
}