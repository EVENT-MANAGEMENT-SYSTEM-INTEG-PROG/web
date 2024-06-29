"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavigationBar from "./Admin/navigation";

export default function Links(props: any) {
    const router = usePathname();

    return (
        <div className="ml-flex items-center spce-x-4">
                  {
                    !props.isAdmin ?
                    <>
                        <Link 
                        className={`text-xl hover:bg-white hover:text-black rounded-lg p-3 ml-5 ${router === '/' ? 'bg-white text-black' : ''}`} 
                        href={"/"}>
                        Home
                        </Link>

                        <Link 
                        className={`text-xl hover:bg-white hover:text-black rounded-lg p-3 ml-5 ${router === '/events' ? 'bg-white text-black' : ''}`} 
                        href={"/events"}>
                        Events
                        </Link>
                    </>
                    :
                    <>
                        <NavigationBar/>
                    </>
                  }

                  {
                    !props.isParticipant?
                    <>
                        {
                          props.isAdmin ? 
                          <>
                          </>
                          :
                          <>
                            <Link 
                            className={`text-white text-xl hover:bg-white hover:text-black rounded-lg p-3 ml-5 ${router === '/schedule' ? 'bg-white text-black' : ''}`} 
                            href={"/dashboard/organizer"}>
                            Schedule
                            </Link>
                          </>
                        }
                    </>
                    :
                    <>
                        <Link 
                        className={`text-white text-xl hover:bg-white hover:text-black rounded-lg p-3 ml-5 ${router === '/services' ? 'bg-white text-black' : ''}`} 
                        href={"/services"}>
                        Services
                        </Link>
                    </>
                  }

                  {
                    !props.isAuth ? 
                    <>
                      <Link 
                      className="text-white text-xl hover:bg-white hover:text-black rounded-lg p-3 ml-5" 
                      href={"/about"}>
                      About
                      </Link>

                      <Link 
                      className="text-white text-xl hover:bg-white hover:text-black rounded-lg p-3 ml-5" 
                      href={"/contact"}>
                      Contact Us
                      </Link>
                    </>
                    :
                    <>
                    </>
                  }


                </div>
    );
}