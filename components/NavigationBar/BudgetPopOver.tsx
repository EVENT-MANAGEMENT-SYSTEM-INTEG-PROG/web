"use client"
import { Button } from "../ui/button"
import { Wallet } from "lucide-react"
import { useRouter } from "next/navigation"
import { getCookie } from 'cookies-next';

export default function BudgetPopOver() {
    const router = useRouter()
    const isParticipant = getCookie('participant')
    return (
        <>
        {
        isParticipant != undefined
        ?
        <Button variant={"ghost"} onClick={() => router.push('/login')} className="hover:bg-amber-300">
            <Wallet/>
        </Button>
        :
        <>
        </>
        }
        </>
    )
}