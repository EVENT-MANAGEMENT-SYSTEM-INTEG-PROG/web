"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import CardSlider from '@/components/Static/CardSlider';
import EventCard from '@/components/Static/EventCard';
import { useState, useEffect } from 'react';
import { Skeleton } from "@/components/ui/skeleton"

import 'swiper/css';

const festival = [
    {
        title: "Ati-Atihan Festival",
        date: "January 3",
        location: "Kalibo, Aklan",
        description: "Celebration of Santo Niño (Child Jesus)",
        image: "/images/festival_atiatihan.jpg"
    },
    {
        title: "Ati-Atihan Festival",
        date: "January 3",
        location: "Kalibo, Aklan",
        description: "Celebration of Santo Niño (Child Jesus)",
        image: "/images/festival_kaamulan.jpg"
    },
    {
        title: "Ati-Atihan Festival",
        date: "January 3",
        location: "Kalibo, Aklan",
        description: "Celebration of Santo Niño (Child Jesus)",
        image: "/images/festival_panagbenga.jpg"
    },
    {
        title: "Ati-Atihan Festival",
        date: "January 3",
        location: "Kalibo, Aklan",
        description: "Celebration of Santo Niño (Child Jesus)",
        image: "/images/festival_pahiyas.jpg"
    },
    {
        title: "Ati-Atihan Festival",
        date: "January 3",
        location: "Kalibo, Aklan",
        description: "Celebration of Santo Niño (Child Jesus)",
        image: "/images/festival_masskara.jpg"
    },
    {
        title: "Ati-Atihan Festival",
        date: "January 3",
        location: "Kalibo, Aklan",
        description: "Celebration of Santo Niño (Child Jesus)",
        image: "/images/festival_higantes.jpg"
    },
]

const wedding = [
    {
        title: "Rhyle Wedding",
        date: "January 3",
        location: "Pagadian, Pagadian City",
        description: "Celebration of Santo Niño (Child Jesus)",
        image: "/images/wedding_1.jpg"
    },

    {
        title: "Charlie Wedding",
        date: "March 3",
        location: "Kinoguitan, Poblacion",
        description: "Celebration of Santo Niño (Child Jesus)",
        image: "/images/wedding_2.jpg"
    },
    {
        title: "Ian Wedding",
        date: "March 3",
        location: "Cagayan De Oro, Ketkai",
        description: "Celebration of Santo Niño (Child Jesus)",
        image: "/images/wedding_3.jpg"
    },
    {
        title: "Clyde Wedding",
        date: "December 3",
        location: "Bukidnon, Manolo",
        description: "Celebration of Santo Niño (Child Jesus)",
        image: "/images/wedding_1.jpg"
    },
]

const concerts = [
    {
        title: "Ben & Ben",
        date: "December 24",
        location: "Bukidnon, Manolo",
        description: "Celebration of Santo Niño (Child Jesus)",
        image: "/images/concert_b&b.jpg"
    },
    {
        title: "Taylor Swift",
        date: "January 3",
        location: "Cagayan De Oro, Pelaez Center",
        description: "Celebration of Santo Niño (Child Jesus)",
        image: "/images/concert_taylor.jpg"
    },
    {
        title: "TWICE",
        date: "May 5",
        location: "Cagayan De Oro, Agora Lapasan",
        description: "Celebration of Santo Niño (Child Jesus)",
        image: "/images/concert_twice.png"
    },
    {
        title: "Silent Sanctuary",
        date: "April 31",
        location: "Balingoan, Balingoan Terminal",
        description: "Celebration of Santo Niño (Child Jesus)",
        image: "/images/concert_ss.jpg"
    },
    {
        title: "Cup of Joe",
        date: "December 6",
        location: "CDO, USTP Gymnasium",
        description: "Celebration of Santo Niño (Child Jesus)",
        image: "/images/concert_1.jpeg"
    },
]

const birthday = [
    {
        title: "Clyde's Birthday",
        date: "December 3",
        location: "Bukidnon, Manolo",
        description: "Celebration of Santo Niño (Child Jesus)",
        image: "/images/birthday_1.jpg"
    },
    {
        title: "Bunjan's Birthday",
        date: "May 21",
        location: "Bukidnon, Manolo",
        description: "Celebration of Santo Niño (Child Jesus)",
        image: "/images/birthday_2.jpg"
    },
    {
        title: "Rhyle's Birthday",
        date: "September 3",
        location: "Bukidnon, Manolo",
        description: "Celebration of Santo Niño (Child Jesus)",
        image: "/images/birthday_3.jpg"
    },
]



export const SwiperCards = () => {
    
    const [isLoading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        setInterval(() => {
            setLoading(true)
        } ,1000)

        setLoading(false)
    }, [])
    

    return ( 
        <>
        <div className="flex-1 flex bg-customColor_black h-custom-60 items-center justify-center flex-col">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className='p-4'>
            <h1 className="text-white text-4xl">Festival</h1>
          </div>
          <Swiper 
          slidesPerView={3}
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
                            <EventCard title={content.title} date={content.date} location={content.location} description={content.description} image={content.image}/>
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
                        <Skeleton className="w-[400px] h-[360px] rounded-3xl bg-amber-300" />
                        </SwiperSlide>
                    )
                })
                }
                </>
            }
          </Swiper>
        </div>
      </div>

      <div className="flex-1 flex bg-customColor_black h-custom-60 items-center justify-center flex-col">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className='p-4'>
            <h1 className="text-white text-4xl">Weddings</h1>
          </div>
          <Swiper 
          slidesPerView={3}
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
                wedding.map((content, key) => {
                    return (
                        <SwiperSlide key={key}>
                            <EventCard title={content.title} date={content.date} location={content.location} description={content.description} image={content.image}/>
                        </SwiperSlide>
                    )
                })
                :
                <>
                <p>loading</p>
                {
                wedding.map((content, key) => {
                    return (
                        <SwiperSlide key={key}>
                        <Skeleton className="w-[400px] h-[360px] rounded-3xl bg-amber-300" />
                        </SwiperSlide>
                    )
                })
                }
                </>
            }
          </Swiper>
        </div>
      </div>


      <div className="flex-1 flex bg-customColor_black h-custom-60 items-center justify-center flex-col">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className='p-4'>
            <h1 className="text-white text-4xl">Birthdays</h1>
          </div>
          <Swiper 
          slidesPerView={3}
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
                birthday.map((content, key) => {
                    return (
                        <SwiperSlide key={key}>
                            <EventCard title={content.title} date={content.date} location={content.location} description={content.description} image={content.image}/>
                        </SwiperSlide>
                    )
                })
                :
                <>
                <p>loading</p>
                {
                birthday.map((content, key) => {
                    return (
                        <SwiperSlide key={key}>
                        <Skeleton className="w-[400px] h-[360px] rounded-3xl bg-amber-300" />
                        </SwiperSlide>
                    )
                })
                }
                </>
            }
          </Swiper>
        </div>
      </div>

      <div className="flex-1 flex bg-customColor_black h-custom-60 items-center justify-center flex-col">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className='p-4'>
            <h1 className="text-white text-4xl">Concerts</h1>
          </div>
          <Swiper 
          slidesPerView={3}
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
                concerts.map((content, key) => {
                    return (
                        <SwiperSlide key={key}>
                            <EventCard title={content.title} date={content.date} location={content.location} description={content.description} image={content.image}/>
                        </SwiperSlide>
                    )
                })
                :
                <>
                <p>loading</p>
                {
                concerts.map((content, key) => {
                    return (
                        <SwiperSlide key={key}>
                        <Skeleton className="w-[400px] h-[360px] rounded-3xl bg-amber-300" />
                        </SwiperSlide>
                    )
                })
                }
                </>
            }
          </Swiper>
        </div>
      </div>
      </>
    )
}
