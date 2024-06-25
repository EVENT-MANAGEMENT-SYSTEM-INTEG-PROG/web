"use client"
import { Button } from "../ui/button"
import { Wallet } from "lucide-react"
import { useRouter } from "next/navigation"

export default function BudgetPopOver() {
    const router = useRouter()
    return (
        <>
        <Button variant={"ghost"} onClick={() => router.push('/login')} className="hover:bg-amber-300">
            <Wallet/>
        </Button>
        </>
    )
}