"use client"
import { Typewriter, useTypewriter } from 'react-simple-typewriter'
import Link from 'next/link'

export default function Top() {

    const [text] = useTypewriter({
        words: ['Interest', 'Curiosity', 'Imagination', 'Inspiration'],
        loop: 0
      })
    return (
        <>
        <div className="min-h-screen">
        {/* Image Background */}
            <section className="h-[100vh] relative bg-[url('/images/home_bg1.png')] h-custom-60 bg-cover bg-center">
                <div className="flex items-center justify-end h-full bg-black bg-opacity-50">
                <h1 className="text-white text-4xl pr-20 uppercase font-bold">
                    Join exciting events that<br />
                    pique your 
                    <p className='text-amber-400'>{text}</p>
                </h1>
                </div>
            </section>

            {/* Floating Button */}
            <div className="absolute top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="flex justify-center space-x-10">
                <Link href={"/events"}>
                    <button className="inline-block bg-amber-400 text-2xl text-black px-10 p-4 rounded-md shadow-lg hover:bg-customColor_white hover:bg-black hover:text-white">
                    Festivals
                    </button>
                </Link>
                
                
                <Link href={"/home"}>
                    <button className="inline-block bg-amber-400 text-2xl text-black px-10 p-4 rounded-md shadow-lg hover:bg-customColor_white hover:bg-black hover:text-white">
                    Weddings
                    </button>
                </Link>
                
                <Link href={"/home"}>
                    <button className="inline-block bg-amber-400 text-2xl text-black px-10 p-4 rounded-md shadow-lg hover:bg-customColor_white hover:bg-black hover:text-white">
                    Concerts
                    </button>
                </Link>
                <Link href={"/home"}>
                    <button className="inline-block bg-amber-400 text-2xl text-black px-10 p-4 rounded-md shadow-lg hover:bg-customColor_white hover:bg-black hover:text-white">
                    More
                    </button>
                </Link>
                </div>
            </div>
        </div>
        </>
    )
}