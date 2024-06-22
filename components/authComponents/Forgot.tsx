"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"


 
const formSchema = z.object({
  email: z.string().min(2).max(50).email({
    message: "This field must be email"
  })
})


export default function ForgotForm() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: ""
        }
    })

    const  onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }

    return (
        <>
        <div className="flex justify-center px-10">
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex justify-center flex-col w-[300px]">
                {/** Email form Field */}
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input className="rounded" placeholder="example@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Button className="rounded" type="submit">Send Email</Button>
                <Link href={"/login"} className="flex flex-row" >
                    <p className="font-bold">Remember Password? </p>
                </Link>
            </form>
            </Form>

        </div>
        </>
      )
}