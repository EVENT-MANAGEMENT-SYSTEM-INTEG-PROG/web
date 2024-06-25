"use client"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import Details from "./Details"

const events  = [
    {
        name: "Mother's Anniversary",
        status: "pending",
        location: "Cagayan De Oro, Lim Ketkai Atrium",
        schedule: "January 25, 2024 : 10:00AM",
    },
    {
        name: "Mother's Anniversary",
        status: "pending",
        location: "Cagayan De Oro, Lim Ketkai Atrium",
        schedule: "January 25, 2024 : 10:00AM",
    },
    {
        name: "Mother's Anniversary",
        status: "pending",
        location: "Cagayan De Oro, Lim Ketkai Atrium",
        schedule: "January 25, 2024 : 10:00AM",
    },
]

export default function Events() {
    return (
        <>
        <div className="bg-amber-400 text-black rounded">
            <Table className="rounded-xl">
                <TableCaption>An Events you have attended.</TableCaption>
                <TableHeader>
                    <TableRow >
                    <TableHead className="w-[200px]">Event Name</TableHead>
                    <TableHead >Status</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead className="">Schedule</TableHead>
                    <TableHead className="text-right">Schedule</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        events.map((content, key) => {
                            return (
                                <>
                                <TableRow key={key}>
                                    <TableCell className="font-medium">{content.name}</TableCell>
                                    <TableCell>{content.status}</TableCell>
                                    <TableCell>{content.location}</TableCell>
                                    <TableCell>{content.schedule}</TableCell>
                                    <TableCell>
                                        <Details/>
                                    </TableCell>
                                </TableRow>
                                </>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </div>
        </>
    )
}