import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"

export default function Details() {
    return (
        <>
        <div className="text-right px-1">
        <Dialog>
        <DialogTrigger asChild>
            <Button className="m-1 rounded-full bg-amber-100 text-black p-6 font-bold hover:bg-amber-700 hover:text-white">
                View Event
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
            </DialogDescription>
            </DialogHeader>
        </DialogContent>
        </Dialog>
        </div>
        </>
    )
}