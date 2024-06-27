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
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"

import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"


const formSchema = z.object({
  event_name: z.string({
    required_error: "Event name is required."
  }).min(2, {
    message: "Event name is required."
  }).max(50),
  event_date: z.date({
    required_error: "Date of event is required"
  }),
  event_description: z.string().min(2, {
    message: "Event Description is required"
  }).max(50),
  event_time: z.string(),
  event_status: z.string(),
  organizer: z.string(),
})
import { useEffect, useState } from "react"
import { Organizers, bookEvent } from "../_actions/actions"

import { useRouter } from "next/navigation"


export default function BookForm() {
    const router = useRouter()
    const [organizers, setOrganizers] = useState([])
    const [value, setValue] = useState<any>("null")
    const { toast } = useToast()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          event_name: "",
          event_description:"",
          event_time: "19:30:10",
          event_status: "pending",
        }
    })

    const  onSubmit = async (values: z.infer<typeof formSchema>) => {
    
            
      
      const date = values.event_date.toISOString().slice(0,10)
      const data = {
        event_name: values.event_name,
        event_description: values.event_description,
        event_date: date,
        event_time: values.event_time,
        organizer: values.organizer,
        event_status: values.event_status,
        event_location: value?.label,
        participants: ['admin@admin.com']
      }

      const res = await bookEvent(data)

      if(!res) {
        toast({
            title:"Something went wrong",
            description: res
        })
      }
      else {
        toast({
            title:"Successfully Book!",
            description: "Event has been booked"
        })
        router.refresh()
      }
    }

    useEffect(() => {
        const getOrganizer = async () => {
            const response = await Organizers()
            
            setOrganizers(response)
        }

        getOrganizer()
    },[])
    
    return (
        <>
        <div className="flex justify-center px-5">
            <Form {...form}>
            <form  onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex justify-center flex-col w-[300px]">
                {/** Event Name */}
                <FormField
                control={form.control}
                name="event_name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Event Name</FormLabel>
                    <FormControl>
                        <Input className="rounded" placeholder="Fiesta" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                {/** Event_Description */}
                <FormField
                control={form.control}
                name="event_description"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Event Description</FormLabel>
                    
                    <FormControl>
                        <Input className="rounded" placeholder="Birthday for my cousins" {...field} ></Input>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                  control={form.control}
                  name="event_date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Date of the Event</FormLabel>
                      <Popover modal>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-[240px] pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "yyyy-MM-dd")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </FormItem>
                  )}
                />

                <FormField
                control={form.control}
                name="organizer"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Event Organizer</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Select organizer for the event " />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {
                                organizers.map((content: any, key) => {
                                    return (
                                        <SelectItem key={key} value={`${content?.user_id}`}>{`${content?.first_name} ${content?.last_name}`}</SelectItem>
                                    )
                                })
                            }
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <GooglePlacesAutocomplete
                    apiKey="AIzaSyCdMCFR2pwGjJdYnu0Z_cq3KFC8cDWI4hA"
                    selectProps={{
                      value,
                      onChange: setValue,
                      styles: {
                        input: (provided) => ({
                          ...provided,
                          color:'black',
                        }),
                        option: (provided) => ({
                          ...provided,
                          color: 'black',
                        }),
                        
                      }
                    }}
                />
                
                <Button className="rounded" type="submit">Submit</Button>


            </form>
            </Form>

        </div>
        </>
      )
}