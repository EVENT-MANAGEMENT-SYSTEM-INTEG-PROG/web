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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"



import { signUp } from "@/auth/auth"
import { toast, useToast } from "../ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
  );
 
const formSchema = z.object({
  role_id: z.string(),
  first_name: z.string().min(2, {
    message: "First Name must be at least 2 characters."
  }),
  last_name: z.string().min(2, {
    message: "Last Name must be at least 2 characters."
  }),
  gender: z.string(),
  email: z.string().min(2).max(50).email({
    message: "This field must be email"
  }),
  password: z.string().min(5, {
    message: "Password must be at least 5 characters."
  }).max(50),
  user_name: z.string().min(5, {
    message: "Username must be at least 5 characters."
  }).max(50),
  mobile_number: z.string().regex(phoneRegex, 'Invalid Number!'),
  confirmPassword: z.string().min(5, {
    message: "Password must be at least 5 characters."
  }).max(50),
  date_of_birth: z.string(),
  country: z.string()
})
.refine(
    (data) => data.password === data.confirmPassword, {
        message: "Password does not match.",
        path: ["confirmPassword"]
    }
)

export default function RegisterForm() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            role_id: "2",
            first_name: "",
            last_name: "",
            user_name: "",
            mobile_number: "",
            email: "",
            password: "",
            confirmPassword: "",
            country: "Philippines"
        }
    })

    const  onSubmit = async (values: z.infer<typeof formSchema>) => {
        
        const res: any = await signUp(values)
        
        if(!res) {
            toast({
                title:"Account has been created",
                description: res?.message
            })
        }
        else {
            toast({
                title:"Something went wrong",
                description: res?.message
            })
        }

    }

    return (
        <>
        <Toaster/>
        <div className="flex justify-center items-center py-1">
            <h1 className="font-bold font-sans px-2 text-5xl text-amber-300">REGISTER </h1>
        </div>
        <div className="flex justify-center py-10">
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 flex justify-center flex-col w-[300px]">
                {/** Firstname form Field */}
                <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                        <Input className="rounded" placeholder="Juan" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                {/** Last Name form Field */}
                <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                        <Input className="rounded" placeholder="Dela Cruz" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />


                {/** gender form Field */}
                <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Gender</FormLabel>
                    <FormControl>
                        <Input className="rounded" placeholder="Male" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />



                {/** date form Field */}
                <FormField
                control={form.control}
                name="date_of_birth"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Date</FormLabel>
                    <FormControl>
                        <Input className="rounded" placeholder="2024-05-05" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                {/** username form Field */}
                <FormField
                control={form.control}
                name="user_name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                        <Input className="rounded" placeholder="juandelacruz" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                {/** phone form Field */}
                <FormField
                control={form.control}
                name="mobile_number"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                        <Input className="rounded" type="tel" placeholder="09987655521" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

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

                {/** confirmPassword form Field */}
                <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    
                    <FormControl>
                        <Input className="rounded" placeholder="******" type="password" {...field} ></Input>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Button className="rounded" type="submit">Sign Up</Button>
                <Link  href={"/login"} className={buttonVariants({ variant: "secondary" })}>Login</Link>
            </form>
            </Form>

        </div>
        </>
      )
}