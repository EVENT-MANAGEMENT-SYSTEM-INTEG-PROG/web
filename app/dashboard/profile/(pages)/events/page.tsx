import TopCard from "@/components/Static/TopCard"
import EventButton from "./_components/BookEvent"
import Events from "./_components/Events"
export default function EventPage() {
    return (
        <>
        <div className="">
            <TopCard title={"EVENTS"}/>

            <EventButton/>

            <div className="m-10">
                <Events/>
            </div>
        </div>
        </>
    )
}