"use client";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"


import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"


import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';
import Image from "next/image";

interface Profile {
    name: string,
    email: string,
    role_id: number,
};

export default function ProfileCard(profile : Profile) {
    const {name, email, role_id} = profile
    const avatar = createAvatar(lorelei, {
        seed: name,
      });
    
    const dataUri = avatar.toDataUri(); 


    return (
        <>
        <div>
            <Card className="w-[400px] text-center items-center">
                <CardHeader className="text-center items-center ">
                    <Image src={dataUri} width={250} height={250} alt="@profile"/>
                    <CardTitle>{name}</CardTitle>
                    <CardDescription>{
                        role_id == 1 ?
                        "Admin"
                        :
                        role_id == 2 ?
                        "Participant"
                        :
                        "Organizer"
                        }</CardDescription>
                </CardHeader>
                <CardContent>
                    <CardDescription>{email}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Link href={"profile/settings"} className={buttonVariants({ variant: "secondary" })}>Update Profile</Link>
                </CardFooter>
            </Card>
        </div>
        </>
    )
}