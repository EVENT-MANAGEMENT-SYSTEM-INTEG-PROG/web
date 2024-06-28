
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

export default async function Events() {

    const event = await myEvent()


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
        </>
    )
}