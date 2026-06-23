import NavBar from "../components/navBar";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';



export function BookingPage() {
    return(
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
            <NavBar />

            <div className = "flex flex-col-reverse md:flex-row items-center justify-center gap-10 w-full max-w-6xl"> 

            <div className="w-full md:w-1/2 flex justify-center">
            <Calendar />
            </div>

            <div className = "w-full md:w-1/2">

            <form className=" max-w-sm mx-auto">
            <div className="mb-5 p-5">
                <label className="block mb-2.5 text-sm font-medium text-heading">Name: </label>
                <input type="text" id="name" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" required />
            </div>

            <div className = "mb-5 p-5">
                <label className="block mb-2.5 text-sm font-medium text-heading">Contact Number: </label>
                <input type="text" id="contact" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" required />
            </div>
        
            <button type="submit" className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit</button>
            
            </form>

            </div>

            </div>

            </div>
        </main>
    );

}