import { buttonVariants } from "@/components/ui/button"
import Image from "next/image";
import Link from "next/link";
import { LogIn } from 'lucide-react';
import { cookies } from 'next/headers'
import ProfilePopOver from "../navComponents/ProfilePopOver";
import NotificationPopOver from "../navComponents/NotificationPopOver";
import BudgetPopOver from "../navComponents/BudgetPopOver";

const Navbar = () => {

    const isAuth = cookies().get('isSign')?.value
    const isParticipant = cookies().get('participant')?.value

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
                  <Link 
                  className="text-white text-xl hover:bg-white hover:text-black rounded-lg p-3 ml-5" 
                  href={"/"}>
                  Home
                  </Link>

                  <Link 
                  className="text-white text-xl hover:bg-white hover:text-black rounded-lg p-3 ml-5" 
                  href={"/events"}>
                  Events
                  </Link>

                  {
                    !isParticipant ?
                    <>
                    <Link 
                    className="text-white text-xl hover:bg-white hover:text-black rounded-lg p-3 ml-5" 
                    href={"/services"}>
                    Schedule
                    </Link>
                    </>
                    :
                    <>
                    <Link 
                    className="text-white text-xl hover:bg-white hover:text-black rounded-lg p-3 ml-5" 
                    href={"/services"}>
                    Services
                    </Link>
                    </>
                  }

                  {
                    !isAuth ? 
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
                    <></>
                  }


                </div>
              </div>
              <div>   
                {
                  !isAuth ? 
                  <Link href={"/login"} className={buttonVariants({ variant: "secondary" })}>
                  <LogIn className="mx-2"/>
                  Sign In/ Sign Up
                  </Link>
                  :
                  <div>
                    <NotificationPopOver/>
                    <BudgetPopOver/>
                    <ProfilePopOver/>
                  </div>
                }
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  };
  
  export default Navbar;
  