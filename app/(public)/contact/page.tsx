import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
    return (
        <>
            <div>
            <div className="relative z-10">
            <div className="relative">
                <img
                className="relative w-full h-full"
                src="/bg_img.png"
                alt="contact"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 text-white flex flex-col justify-center items-center p-4">
                <h5 className="font-bold text-5xl ml-20 mt-[350px]">Contact Us</h5>
                <p className="text-m font-extralight ml-20">
                    We'd love to hear from you
                </p>
                </div>
            </div>
            </div>

            <div className="grid grid-flow-col grid-cols-2 py-[10%]">
            <div className="text-white p-8 grid grid-cols- md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center text-center">
                <div className="bg-yellow-500 p-4 rounded-full mb-4">
                    <svg
                    className="w-6 h-6 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 4.5 7 13 7 13s7-8.5 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z"></path>
                    </svg>
                </div>
                <h2 className="text-lg font-semibold">Address</h2>
                <p>Cagayan de Oro City</p>
                </div>
                <div className="flex flex-col items-center text-center">
                <div className="bg-yellow-500 p-4 rounded-full mb-4">
                    <svg
                    className="w-6 h-6 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path d="M20 4H4v16h16V4zm-4 11l-4-4-4 4V7h8v8z"></path>
                    </svg>
                </div>
                <h2 className="text-lg font-semibold">Mail</h2>
                <p>my.email@gmail.com</p>
                </div>
                <div className="flex flex-col items-center text-center">
                <div className="bg-yellow-500 p-4 rounded-full mb-4">
                    <svg
                    className="w-6 h-6 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path>
                    </svg>
                </div>
                <h2 className="text-lg font-semibold ">Office Hours</h2>
                <p>Week Days: 8:00 am - 10:00 pm</p>
                <p>Sunday: Closed</p>
                </div>
                <div className="flex flex-col items-center text-center">
                <div className="bg-yellow-500 p-4 rounded-full mb-4">
                    <svg
                    className="w-6 h-6 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path d="M6.62 10.79a15.507 15.507 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.26 1.12.27 2.33.43 3.57.43.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.4 21 3 13.6 3 4.5 3 3.95 3.45 3.5 4 3.5H7c.55 0 1 .45 1 1 0 1.25.16 2.45.43 3.57.1.35.01.74-.26 1.01l-2.2 2.21z"></path>
                    </svg>
                </div>
                <h2 className="text-lg font-semibold">Phone</h2>
                <p>912 345 6789</p>
                </div>
                <div className=" flex justify-end p-4 mt-11 "></div>
            </div>
            <div className="grid grid-flow-row grid-rows-3 mr-[15%] mb-12">
                <h5 className="text-[40px]">Contact Us</h5>
                <div className="grid grid-flow-col grid-cols-1 mb-[10px]">
                <Input
                    className="w-[250px] mx-1 bg-white text-black"
                    placeholder="Your Name"
                />
                <Input
                    className="w-[250px] mx-1 bg-white text-black"
                    placeholder="Email Address"
                />
                </div>
                <div className="grid grid-flow-col grid-cols-1">
                <Input
                    className="w-[250px] mx-1 bg-white text-black"
                    placeholder="Phone Number"
                />
                <Select>
                    <SelectTrigger className="w-[253px] bg-white text-black">
                    <SelectValue placeholder="Select Subject" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
                </div>
                <div className="mt-[20px]">
                <Textarea
                    className="bg-white text-black"
                    placeholder="Write Message"
                />
                </div>
                <div>
                <button
                    type="submit"
                    className="w-[180px] px-4 py-1 mt-[25px] rounded-lg bg-yellow-400/100 text-gray-900 font-bold focus:ring-2 focus:ring-black focus:ring-white-700 hover:bg-slate-100 active:bg-white-100 focus:outline-none"
                >
                    Submit Comment
                </button>
                </div>
            </div>
            </div>

            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.251412804556!2d124.65522691539698!3d8.454240793892227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff969b53b9d849%3A0x2c978b7cc7072c5b!2sCagayan%20de%20Oro%20City!5e0!3m2!1sen!2sph!4v1624319303823!5m2!1sen!2sph"
            width="600"
            height="350"
            loading="lazy"
            className="rounded-lg mx-auto mb-20"
            >     </iframe>

    </div>
        </>
    )
}