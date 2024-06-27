import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import Image from "next/image"
import  { CircleUserRound } from 'lucide-react'

export default function AdminEventCard({ title, description, organizer }: any) {
    return (
        <>
            <Card className="rounded-3xl h-[360px] items-center place-content-center">
            <CardHeader className="flex items-center">
                <p className="font-bold text-l">{title}</p>
            </CardHeader>
            <CardContent>
                <CardDescription className="flex items-center">
                    {description}
                </CardDescription>
                <div className="flex mt-[15vh]">
                    <CircleUserRound />{organizer}
                </div>
            </CardContent>
            <CardFooter>
            </CardFooter>
            </Card>
        </>
    )
}