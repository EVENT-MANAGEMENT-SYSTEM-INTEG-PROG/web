
import { upcomingEvents } from '@/components/Admin/Dashboard/_actions/action';
import { Dot } from 'lucide-react';

export default async function AdminUpcomingEvents() {

    const upevents = await upcomingEvents();

    return (
        <>
            {
                upevents.map((content: any, key: any) => {
                    return (
                        <div key={key} className='flex items-center rounded-md font-medium bg-white text-center text-black py-5 pl-5 pr-10 w-full mt-5'>
                            <div><Dot color='yellow' /></div>
                            <div className='pl-3'>{content.name}<br/>{content.status}</div>
                        </div>
                    )
                })
            }
        </>
    );
}