
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
import { myEvent } from "../_actions/actions"

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

export default async function Events() {

    const event = await myEvent()

    console.log(event)

    return (
        <>
        <div className="bg-white text-black rounded">
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
                        event.map((content: any, key: any) => {
                            return (
                                <>
                                <TableRow key={key}>
                                    <TableCell className="font-medium">{content.event_name}</TableCell>
                                    <TableCell>{content.event_status}</TableCell>
                                    <TableCell>{content.event_location}</TableCell>
                                    <TableCell>{content.event_date}</TableCell>
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