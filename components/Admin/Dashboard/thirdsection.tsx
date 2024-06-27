"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import CardSlider from '@/components/Static/CardSlider';
import AdminEventCard from '@/components/Static/Admin/AdminEventCard';
import { useState, useEffect } from 'react';
import { Skeleton } from "@/components/ui/skeleton"

import 'swiper/css';

const festival = [
    {
        title: "Wedding",
        date: "January 3",
        location: "Kalibo, Aklan",
        description: "Celebration of Santo Niño (Child Jesus)",
    },
    {
        title: "Festival",
        date: "January 3",
        location: "Kalibo, Aklan",
        description: "Celebration of Santo Niño (Child Jesus)",
    },
    {
        title: " Festival",
        date: "January 3",
        location: "Kalibo, Aklan",
        description: "Celebration of Santo Niño (Child Jesus)",
    },
    {
        title: "Festival",
        date: "January 3",
        location: "Kalibo, Aklan",
        description: "Celebration of Santo Niño (Child Jesus)",
    },
    {
        title: "Festival",
        date: "January 3",
        location: "Kalibo, Aklan",
        description: "Celebration of Santo Niño (Child Jesus)",
    },
    {
        title: "Festival",
        date: "January 3",
        location: "Kalibo, Aklan",
        description: "Celebration of Santo Niño (Child Jesus)",
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
        <div className="flex w-full justify-around pr-[18vw]">
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
                                <AdminEventCard title={content.title} date={content.date} location={content.location} description={content.description}/>
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