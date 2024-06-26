import { buttonVariants } from "@/components/ui/button"
import Image from "next/image";
import Link from "next/link";
import { LogIn } from 'lucide-react';
import { cookies } from 'next/headers'
import ProfilePopOver from "../NavigationBar/ProfilePopOver";
import NotificationPopOver from "../NavigationBar/NotificationPopOver";
import BudgetPopOver from "../NavigationBar/BudgetPopOver";
import Links from "./Links";

const Navbar = () => {

    const isAuth = cookies().get('isSign')?.value
    const isParticipant = cookies().get('participant')?.value
    const isAdmin = cookies().get('admin')?.value

    return (
      <div>
        <nav className="bg-black">
          <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-10 ">
            <div className="flex items-center justify-between h-20">
              {
                !isAdmin?
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
                :
                <>
                </>
              }
              <div className="hidden md:block">
                <Links isAuth={isAuth} isParticipant={isParticipant} isAdmin={isAdmin}/>
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
  