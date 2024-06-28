import { ScrollArea } from "@/components/ui/scroll-area"
import UpcomingCard from "../_components/UpcomingCard"


import { approvedEvents } from "../_action/action"


export default async function UpcomingEvent() {

    const approve = await approvedEvents()

    const date = new Date().toISOString().slice(0,10)


    return (
        <>
        <ScrollArea className="h-[400px] w-[500px] rounded-md  p-4 m-2">
            <p className="font-bold text-xl">Upcoming Event</p>
            {
                approve.map((content: any, key:any) => {
                    return (
                        <div key={key}>
                        {
                            !(new Date(content.event_date) > new Date(date))
                            ?
                            <>
                                <UpcomingCard event_name={content.event_name} event_status={content.event_status} event_description={content.event_description} event_time={content.event_time}
                                event_date={content.event_date}
                                event_location={content.event_location}/>
                            </>
                            :
                                <>
                                    <p>no upcoming event</p>
                                </>
                        }
                        </div>
                    )
                })
            }
        </ScrollArea>
        </>
    )
}