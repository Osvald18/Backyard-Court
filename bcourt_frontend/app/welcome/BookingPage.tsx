import NavBar from "../components/navBar";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import AxiosInstance from "./Axios";
import {useState, useEffect} from "react";


export function BookingPage() {


    interface Booking {
    id: number;
    patron_id: number;
    time_start: string;
    time_end: string;
    }

    //const [date, setDate] = useState([])
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [selectedDate, setSelectedDate] = useState("");


     const GetData = () => {
        AxiosInstance.get('date/').then((res) => { setBookings(res.data); console.log(res.data); }).catch((err) => console.error(err));
     }

     useEffect(() => {GetData()}, [])

    // Fetch schedules from Django API
    // useEffect(() => {
    //     fetch("http://localhost:8000/date/?format=api")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setBookings(data);
    //             console.log("Fetched bookings:", data);
    //         })
    // }, []);

    // Fixed time slots
    const timeSlots = [
        "05:00",
        "06:00",
        "07:00",
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00", //1
        "14:00", //2
        "15:00", //3
        "16:00", //4
        "17:00", //5
        "18:00", //6
        "19:00", //7
        "20:00", //8
        "21:00", //9
        "22:00", //10
        "23:00", //11
        "24:00", //12
        "01:00",
    ];
    

    // Filter bookings based on selected date. this returned the selected date e.g 2026-7-10
    const filteredBookings = bookings.filter(
        (booking) => booking.time_start.split("T")[0] === selectedDate
    );

    // Check if slot is booked 
    //slot in the parameter pertains to the time slots
    // return slots that are booked
    const isBooked = (slot: string) => {
        return filteredBookings.some((booking) => {
            const start = booking.time_start.slice(11, 16);
            const end = booking.time_end.slice(11, 16);

            return slot >= start && slot <= end;
        });
    };

    const [time, setTime] = useState("");

    // Format for display (24h -> 12h)
    const formatTime = (slot: string) => {
        const [hour, minute] = slot.split(":");
        let h = parseInt(hour);
        const suffix = h >= 12 ? "PM" : "AM";

        if (h === 0) h = 12;
        if (h > 12) h -= 12;

        return(`${h}:${minute} ${suffix}`);

        

    };


    // Calendar date select handler
    const handleDateSelect = (date: Date) => {
        setSelectedDate(date.toISOString().split("T")[0]);
    };
     



    return(

        <main className="flex items-center justify-center pt-16 pb-4">
            
            <div className="flex-1 flex flex-col items-center gap-16 min-h-0"> 
            <NavBar />

            {/* main content wrapper */}
            <div className = "flex flex-col-reverse md:flex-row items-start justify-center gap-10 w-full max-w-6xl"> 

            

            {/* calendar and schedule picker */}
            <div className="w-full md:w-1/2 relative justify-items-center">


            {/* setSelectedDate(date.toISOString().split("T")[0]); console.log(date.toISOString()); */}
            <Calendar  onChange= {(value) => {const date = value as Date; setSelectedDate(date.toLocaleDateString("sv")); } } className = "border-hidden! shadow-xl! rounded-2xl! font-sans!"/>
                    <div className="h-80 overflow-y-auto no-scrollbar mt-10 mb-10 w-full max-w-xs p-2">
            {timeSlots.map((slot) => (
                <div key={slot} className="flex items-start gap-3 ">
                    <p className="w-20 text-xs font-bold text-right shrink-0">
                        { formatTime(slot) }
                    </p>

                    <button
                        type="button"
                        disabled={isBooked(slot)}
                        className={`flex-1 h-11 border rounded-2xl ${
                            isBooked(slot)
                                ? "bg-green-gray cursor-not-allowed"
                                : "bg-neutral-secondary-medium hover:bg-success-strong focus:ring-4 focus:ring-green-theme shadow-xs"
                        }`}
                    >
                    </button>
                </div>
            ))}
        </div>

            </div>

                <div className = "align-top w-full md:w-1/2">

                <form className=" max-w-sm mx-auto">
                <div className="mb-5 p-5">
                    <label className="block mb-2.5 text-sm font-medium text-heading">Name: </label>
                    <input type="text" id="name" className="bg-neutral-secondary-medium border rounded-2xl text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" required />
                </div>

                <div className = "mb-5 p-5">
                    <label className="block mb-2.5 text-sm font-medium text-heading">Contact Number: </label>
                    <input type="text" id="contact" className="bg-neutral-secondary-medium border rounded-2xl text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" required />
                </div>
            
                <div className = "flex justify-center mb-5 p-5">
                    <button type="button" className ="w-50  mb-5 p-5 text-white bg-green-theme box-border border border-transparent rounded-2xl hover:bg-success-strong focus:ring-4 focus:ring-success-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Book</button>
                </div>


                </form>


                </div>

            </div>

            </div>
        </main>
    );

}