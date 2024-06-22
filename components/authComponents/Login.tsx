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
import { signIn } from "@/app/(auth)/_auth/auth"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { ToastAction } from "@/components/ui/toast"

const formSchema = z.object({
  email: z.string().min(2).max(50).email({
    message: "This field must be email"
  }),
  password: z.string().min(5, {
    message: "Password must be at least 5 characters."
  }).max(50),
})


export default function LoginForm() {
    const { toast } = useToast()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const  onSubmit = async (values: z.infer<typeof formSchema>) => {
        const data = {
            email: values.email,
            password: values.password
        }
        
        const res = await signIn(data)

        toast({
            title:"Something went wrong",
            description: res?.message,
        })

    }

    return (
        <>
        <div className="flex justify-center px-5">
            <Toaster />
            <Form {...form}>
            <form  onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex justify-center flex-col w-[300px]">
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
                {/** Password form Field */}
                <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Password</FormLabel>
                    
                    <FormControl>
                        <Input className="rounded" placeholder="******" type="password" {...field} ></Input>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Button className="rounded" type="submit">Submit</Button>
                <Link href={"/register"} className={buttonVariants({ variant: "secondary" })}>Sign Up</Link>

                <Link href={"/forgot"} className="flex flex-row" >
                    <p className="font-bold">Forgot Password? </p>
                </Link>
            </form>
            </Form>

        </div>
        </>
      )
}