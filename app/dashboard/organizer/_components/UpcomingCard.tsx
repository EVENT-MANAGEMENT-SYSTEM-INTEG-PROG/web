import { CalendarCheck, MapPin, Clock10Icon } from "lucide-react"

export default function UpcomingCard({ event_name, event_location, event_time, event_status, event_date, event_description}: any) {
    const date: any = new Date(event_date).toDateString()
    return (
        <>
        <div className="h-[200px] w-[350px] rounded-md border p-4 bg-white m-10 text-black border-l-amber-400 border-l-4">
            <div className="flex justify-between my-3">
                <div className="font-bold flex">
                    <CalendarCheck color="grey" className="mx-1"/>
                    <p>{event_name}</p>
                </div>
                <div className="text-sm text-gray-500">
                    <p>{date}</p>
                </div>
            </div>

            <div className="flex text-sm px-4 text-gray-500">
                {event_description}
            </div>

            <div className="flex text-sm my-5 text-gray-500 items-center">
                <p>{event_location}</p>
            </div>

            <div className="flex items-center">
            <p className="text-gray-500 text-sm">{event_time}</p>
            </div>
        </div>
        </>
    )
}