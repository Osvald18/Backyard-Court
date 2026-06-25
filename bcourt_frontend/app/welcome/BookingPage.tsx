import NavBar from "../components/navBar";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';



export function BookingPage() {
    return(
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
            <NavBar />

            <div className = "flex flex-col-reverse md:flex-row items-center justify-center gap-10 w-full max-w-6xl"> 

            <div className="w-full mb-10 md:w-1/2 relative justify-items-center">
            <Calendar  />

            <div className = "absolute mt-10 justify-center w-1/2 md:w-1/2">

            <div id = "id-hour-12" className = "row time-div">
                <button type="button" className ="w-full h-10 bg-netural-secondary-medium border rounded-2xl border-green-theme hover:bg-success-strong focus:ring-4 focus:ring-green-theme shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"></button>
            </div>

            <div id = "id-hour-01" className = "row time-div">
                <button type="button" className ="w-full h-10 bg-netural-secondary-medium border rounded-2xl border-green-theme hover:bg-success-strong focus:ring-4 focus:ring-green-theme shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"></button>
            </div>
            
            <div id = "id-hour-02" className = "row time-div">
                <button type="button" className ="w-full h-10 bg-netural-secondary-medium border rounded-2xl border-green-theme hover:bg-success-strong focus:ring-4 focus:ring-green-theme shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"></button>
            </div>

            <div id = "id-hour-03" className = "row time-div">
                <button type="button" className ="w-full h-10 bg-netural-secondary-medium border rounded-2xl border-green-theme hover:bg-success-strong focus:ring-4 focus:ring-green-theme shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"></button>
            </div>

            <div id = "id-hour-04" className = "row time-div">
                <button type="button" className ="w-full h-10 bg-netural-secondary-medium border rounded-2xl border-green-theme hover:bg-success-strong focus:ring-4 focus:ring-green-theme shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"></button>
            </div>

            <div id = "id-hour-05" className = "row time-div">
                <button type="button" className ="w-full h-10 bg-netural-secondary-medium border rounded-2xl border-green-theme hover:bg-success-strong focus:ring-4 focus:ring-green-theme shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"></button>
            </div>

            <div id = "id-hour-06" className = "row time-div">
                <button type="button" className ="w-full h-10 bg-netural-secondary-medium border rounded-2xl border-green-theme hover:bg-success-strong focus:ring-4 focus:ring-green-theme shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"></button>
            </div>

            <div id = "id-hour-07" className = "row time-div">
                <button type="button" className ="w-full h-10 bg-netural-secondary-medium border rounded-2xl border-green-theme hover:bg-success-strong focus:ring-4 focus:ring-green-theme shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"></button>
            </div>

            <div id = "id-hour-08" className = "row time-div">
                <button type="button" className ="w-full h-10 bg-netural-secondary-medium border rounded-2xl border-green-theme hover:bg-success-strong focus:ring-4 focus:ring-green-theme shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"></button>
            </div>

            <div id = "id-hour-09" className = "row time-div">
                <button type="button" className ="w-full h-10 bg-netural-secondary-medium border rounded-2xl border-green-theme hover:bg-success-strong focus:ring-4 focus:ring-green-theme shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"></button>
            </div>

            <div id = "id-hour-10" className = "row time-div">
                <button type="button" className ="w-full h-10 bg-netural-secondary-medium border rounded-2xl border-green-theme hover:bg-success-strong focus:ring-4 focus:ring-green-theme shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"></button>
            </div>

            <div id = "id-hour-11" className = "row time-div">
                <button type="button" className ="w-full h-10 bg-netural-secondary-medium border rounded-2xl border-green-theme hover:bg-success-strong focus:ring-4 focus:ring-green-theme shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"></button>
            </div>
            

            </div>

            </div>

            <div className = "w-full md:w-1/2">

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