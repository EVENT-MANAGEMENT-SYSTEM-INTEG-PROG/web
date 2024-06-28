
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
import { assignEvent } from "@/components/NavigationBar/_actions/action"


export default async function Events() {

    const event = await assignEvent()

    return (
        <>
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
        </>
    )
}