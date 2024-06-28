import EventList from "./List";
import { Input } from "@/components/ui/input";

export default function Events() {
    return (
        <>
            <div className="w-full flex justify-end py-5 px-5">
                <Input className="rounded-[20px] bg-white text-black w-[15vw]" placeholder="Search Event"/>
            </div>
            <div className="w-[100%] border border-rose-600 px-12">
                <EventList />
            </div>
        </>
    );
}