
"use client"

import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"


import BookForm from "./BookForm"
import { useState, useEffect } from "react"

export default function EventButton() {


    return (
        <>
        <div className="m-10 flex justify-end" suppressHydrationWarning>
            <Dialog>
            <DialogTrigger asChild>
                <Button className="rounded-full bg-amber-400 text-black p-6 font-bold hover:bg-black hover:text-white">
                    <PlusCircle className="mx-1" />
                    Book Event
                </Button>
            </DialogTrigger>
            <DialogContent className=" border-amber-400 " suppressHydrationWarning={true}>
                <DialogHeader>
                <DialogTitle>Book A New Event</DialogTitle>
                <DialogDescription>
                    You can book your events here!
                </DialogDescription>
                </DialogHeader>

                <BookForm/>

            </DialogContent>
            </Dialog>
        </div>
        </>
    )
}