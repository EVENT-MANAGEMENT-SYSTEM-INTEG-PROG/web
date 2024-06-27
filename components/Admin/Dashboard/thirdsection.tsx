"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import CardSlider from '@/components/Static/CardSlider';
import AdminEventCard from '@/components/Static/Admin/AdminEventCard';
import { useState, useEffect } from 'react';
import { Skeleton } from "@/components/ui/skeleton"

import 'swiper/css';
import { Organizers } from '@/app/dashboard/profile/(pages)/events/_actions/actions';

const festival = [
    {
        title: "Wedding",
        description: "Celebration of Santo Niño (Child Jesus)",
        organizer: "Rairu"
    },
    {
        title: "Festival",
        description: "Celebration of Santo Niño (Child Jesus)",
        organizer: "Rairu"
    },
    {
        title: " Festival",
        description: "Celebration of Santo Niño (Child Jesus)",
        organizer: "Rairu"
    },
    {
        title: "Festival",
        description: "Celebration of Santo Niño (Child Jesus)",
        organizer: "Rairu"
    },
    {
        title: "Festival",
        description: "Celebration of Santo Niño (Child Jesus)",
        organizer: "Rairu"
    },
    {
        title: "Festival",
        description: "Celebration of Santo Niño (Child Jesus)",
        organizer: "Rairu"
    },
]

export default function DashboardThirdSection() {

    const [isLoading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        setInterval(() => {
            setLoading(true)
        } ,1000)

        setLoading(false)
    }, [])

    return (
        <div className="flex w-full justify-around pr-[19vw] pb-[12vh]">
            <div className="flex w-[45vw]">
                <Swiper 
            slidesPerView={2}
            spaceBetween={20}
            loop={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            >

                {
                    isLoading ? 
                    festival.map((content, key) => {
                        return (
                            <SwiperSlide key={key}>
                                <AdminEventCard title={content.title} description={content.description} organizer={content.organizer}/>
                            </SwiperSlide>
                        )
                    })
                    :
                    <>
                    <p>loading</p>
                    {
                    festival.map((content, key) => {
                        return (
                            <SwiperSlide key={key}>
                            <Skeleton className="w-[200px] h-[300px] rounded-3xl bg-amber-300" />
                            </SwiperSlide>
                        )
                    })
                    }
                    </>
                }
            </Swiper>
            </div>
            <div>
                asd
            </div>
        </div>
    );
}