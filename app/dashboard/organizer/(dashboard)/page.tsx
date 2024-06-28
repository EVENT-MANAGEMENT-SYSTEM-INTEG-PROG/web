import Events from "../_components/Events"
import UpcomingEvent from "../_components/UpcomingEvent"
import TopCard from "@/components/Static/TopCard"

export default function DashboardPage() {
    return (
        <>
        <TopCard title={"Managed Event"}/>
        <div className="flex justify-start items-center">
            <Events/>
            <UpcomingEvent/>
        </div>
        </>
    )
}