import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import EventCard from '@/components/Static/EventCard';

import { allEvents } from '@/components/Admin/Events/_actions/action';


export default async function EventPage() {

    const event = await allEvents();
    

    return (
        <>
        <div className='flex flex-wrap-reverse justify-center'>
            {
                event.map((content: any, key: any) => {
                    return (
                        <EventCard title={content.event_name} date={content.event_date} location={content.event_location} description={content.event_description} image={"/landing.png"}/>
                    )
                })
            }
        </div>
        </>
    )
}