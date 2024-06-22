import { Input } from "../ui/input";
import Image from "next/image";

const Navbar = () => {
    return (
      <div >
    
        <nav className="bg-black">
          <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-10 ">
            <div className="flex items-center justify-between h-20">
              <div className="flex item-center">
                <div className="flex flex-row">
                  <Image
                  className="ml-[20px]"
                    src="/eventwise.png"
                    alt="event logo"
                    width={200}
                    height={200}
                    
                  />
                </div>
              </div>
              <div className="hidden md:block  ">
                <div className="ml-flex items-center spce-x-4">
                  <a
                    href="/"
                    className="text-white 
                    text-xl
                    hover:bg-white 
                    hover:text-black 
                    rounded-lg p-3 ml-5"
                  >
                    Home
                  </a>
  
                  <a
                    href="/events"
                    className="text-white 
                    text-xl
                    hover:bg-white 
                    hover:text-black 
                    rounded-lg p-3 ml-5"
                  >
                    Events
                  </a>
  
                  <a
                    href="/services"
                    className="text-white 
                    text-xl
                    hover:bg-white 
                    hover:text-black 
                    rounded-lg p-3 ml-5"
                  >
                    Services
                  </a>
  
                  <a
                    href="/schedule"
                    className="text-white 
                    text-xl
                    hover:bg-white 
                    hover:text-black 
                    rounded-lg p-3 ml-5"
                  >
                    Schedule
                  </a>
  
                  <a
                    href="/about"
                    className="text-white 
                    text-xl
                    hover:bg-white 
                    hover:text-black 
                    rounded-lg p-3 ml-5"
                  >
                    About
                  </a>
  
                  <a
                    href="/contact"
                    className="text-white 
                    text-xl
                    hover:bg-white 
                    hover:text-black 
                    rounded-lg p-3 ml-5"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
  
              <div className="relative flex items-center mr-8 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <Input
                  type="text"
                  placeholder="Search"
                  className="pl-10 py-6 bg-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                  style={{ color: "white" }}
                />
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  };
  
  export default Navbar;
  