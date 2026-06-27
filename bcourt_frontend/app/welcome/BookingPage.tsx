import NavBar from "../components/navBar";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';


export function pickSchedule() {






}

export function BookingPage() {


    return(

        <main className="flex items-center justify-center pt-16 pb-4">
            
            <div className="flex-1 flex flex-col items-center gap-16 min-h-0"> 
            <NavBar />

            {/* main content wrapper */}
            <div className = "flex flex-col-reverse md:flex-row items-start justify-center gap-10 w-full max-w-6xl"> 

            {/* calendar and schedule picker */}
            <div className="w-full md:w-1/2 relative justify-items-center">
            <Calendar  />

            <div className = "h-80 overflow-y-auto no-scrollbar mt-10 mb-10 justify-center w-1/2 md:w-1/2 p-2">

                <div id = "id-hour-05" className = "flex items-center gap-3 w-full row time-div">
                    <p className = "w-20 text-right shrink-0 text-xs whitespace-nowrap">5:00 AM</p>
                    <button type="button" className ="flex-1 h-10 bg-netural-secondary-medium border rounded-2xl border-green-theme hover:bg-success-strong focus:ring-4 focus:ring-green-theme shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"></button>
                </div>

                <div id = "id-hour-06" className = "flex items-center gap-3 w-full row time-div">
                    <p className = "w-20 text-right shrink-0 text-xs whitespace-nowrap">6:00 AM</p>
                    <button type="button" className ="flex-1 h-10 bg-netural-secondary-medium border rounded-2xl border-green-theme hover:bg-success-strong focus:ring-4 focus:ring-green-theme shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"></button>
                </div>

                <div id = "id-hour-07" className = "flex items-center gap-3 w-full row time-div">
                    <p className = "w-20 text-right shrink-0 text-xs whitespace-nowrap">7:00 AM</p>
                    <button type="button" className ="flex-1 h-10 bg-netural-secondary-medium border rounded-2xl border-green-theme hover:bg-success-strong focus:ring-4 focus:ring-green-theme shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"></button>
                </div>

                <div id = "id-hour-08" className = "flex items-center gap-3 w-full row time-div">
                    <p className = "w-20 text-right shrink-0 text-xs whitespace-nowrap">8:00 AM</p>
                    <button type="button" className ="flex-1 h-10 bg-netural-secondary-medium border rounded-2xl border-green-theme hover:bg-success-strong focus:ring-4 focus:ring-green-theme shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"></button>
                </div>

                <div id = "id-hour-09" className = "flex items-center gap-3 w-full row time-div">
                    <p className = "w-20 text-right shrink-0 text-xs  whitespace-nowrap">9:00 AM</p>
                    <button type="button" className ="flex-1 h-10 bg-netural-secondary-medium border rounded-2xl border-green-theme hover:bg-success-strong focus:ring-4 focus:ring-green-theme shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"></button>
                </div>

                <div id = "id-hour-10" className = "flex items-center gap-3 w-full row time-div">
                    <p className = "w-20 text-xs whitespace-nowrap text-right shrink-0">10:00 AM</p>
                    <button type="button" className ="flex-1  h-10 bg-netural-secondary-medium border rounded-2xl border-green-theme hover:bg-success-strong focus:ring-4 focus:ring-green-theme shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"></button>
                </div>

                <div id = "id-hour-11" className = "flex items-center gap-3 row time-div">
                    <p className = "w-20 text-right shrink-0 text-xs  whitespace-nowrap">11:00 AM</p>
                    <button type="button" className ="w-full h-10 bg-netural-secondary-medium border rounded-2xl border-green-theme hover:bg-success-strong focus:ring-4 focus:ring-green-theme shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"></button>
                </div>

                <div id = "id-hour-12" className = "flex items-center gap-3 row time-div">
                    <p className = "w-20 text-right shrink-0 text-xs  whitespace-nowrap">12:00 PM</p>
                    <button type="button" className ="w-full h-10 bg-netural-secondary-medium border rounded-2xl border-green-theme hover:bg-success-strong focus:ring-4 focus:ring-green-theme shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"></button>
                </div>

                <div id = "id-hour-13" className = "flex items-center gap-3 row time-div">
                    <p className = "w-20 text-right shrink-0 text-xs  whitespace-nowrap">1:00 PM</p>
                    <button type="button" className ="w-full h-10 bg-netural-secondary-medium border rounded-2xl border-green-theme hover:bg-success-strong focus:ring-4 focus:ring-green-theme shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"></button>
                </div>

                <div id = "id-hour-14" className = "flex items-center gap-3 row time-div">
                    <p className = "w-20 text-right shrink-0 text-xs  whitespace-nowrap">2:00 PM</p>
                    <button type="button" className ="w-full h-10 bg-netural-secondary-medium border rounded-2xl border-green-theme hover:bg-success-strong focus:ring-4 focus:ring-green-theme shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"></button>
                </div>

                <div id = "id-hour-15" className = "flex items-center gap-3 row time-div">
                    <p className = "w-20 text-right shrink-0 text-xs  whitespace-nowrap">3:00 PM</p>
                    <button type="button" className ="w-full h-10 bg-netural-secondary-medium border rounded-2xl border-green-theme hover:bg-success-strong focus:ring-4 focus:ring-green-theme shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"></button>
                </div>

                <div id = "id-hour-16" className = "flex items-center gap-3 row time-div">
                    <p className = "w-20 text-right shrink-0 text-xs  whitespace-nowrap">4:00 PM</p>
                    <button type="button" className ="w-full h-10 bg-netural-secondary-medium border rounded-2xl border-green-theme hover:bg-success-strong focus:ring-4 focus:ring-green-theme shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"></button>
                </div>

                <div id = "id-hour-17" className = "flex items-center gap-3 row time-div">
                    <p className = "w-20 text-right shrink-0 text-xs  whitespace-nowrap">5:00 PM</p>
                    <button type="button" className ="w-full h-10 bg-netural-secondary-medium border rounded-2xl border-green-theme hover:bg-success-strong focus:ring-4 focus:ring-green-theme shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"></button>
                </div>

                <div id = "id-hour-18" className = "flex items-center gap-3 row time-div">
                    <p className = "w-20 text-right shrink-0 text-xs  whitespace-nowrap">6:00 PM</p>
                    <button type="button" className ="w-full h-10 bg-netural-secondary-medium border rounded-2xl border-green-theme hover:bg-success-strong focus:ring-4 focus:ring-green-theme shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"></button>
                </div>

                <div id = "id-hour-19" className = "flex items-center gap-3 row time-div">
                    <p className = "w-20 text-right shrink-0 text-xs  whitespace-nowrap">7:00 PM</p>
                    <button type="button" className ="w-full h-10 bg-netural-secondary-medium border rounded-2xl border-green-theme hover:bg-success-strong focus:ring-4 focus:ring-green-theme shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"></button>
                </div>

                <div id = "id-hour-20" className = "flex items-center gap-3 row time-div">
                    <p className = "w-20 text-right shrink-0 text-xs  whitespace-nowrap">8:00 PM</p>
                    <button type="button" className ="w-full h-10 bg-netural-secondary-medium border rounded-2xl border-green-theme hover:bg-success-strong focus:ring-4 focus:ring-green-theme shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"></button>
                </div>

                <div id = "id-hour-21" className = "flex items-center gap-3 row time-div">
                    <p className = "w-20 text-right shrink-0 text-xs  whitespace-nowrap">9:00 PM</p>
                    <button type="button" className ="w-full h-10 bg-netural-secondary-medium border rounded-2xl border-green-theme hover:bg-success-strong focus:ring-4 focus:ring-green-theme shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"></button>
                </div>

                <div id = "id-hour-22" className = "flex items-center gap-3 row time-div">
                    <p className = "w-20 text-right shrink-0 text-xs  whitespace-nowrap">10:00 PM</p>
                    <button type="button" className ="w-full h-10 flex grow-3 bg-netural-secondary-medium border rounded-2xl border-green-theme hover:bg-success-strong focus:ring-4 focus:ring-green-theme shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"></button>
                </div>

                <div id = "id-hour-23" className = "flex items-center gap-3 row time-div">
                    <p className = "w-20 text-right shrink-0 text-xs  whitespace-nowrap">11:00 PM</p>
                    <button type="button" className ="w-full h-10 bg-netural-secondary-medium border rounded-2xl border-green-theme hover:bg-success-strong focus:ring-4 focus:ring-green-theme shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"></button>
                </div>

                <div id = "id-hour-24" className = "flex items-center gap-3 row time-div">
                    <p className = "w-20 text-right shrink-0 text-xs  whitespace-nowrap">12:00 AM</p>
                    <button type="button" className ="w-full h-10 bg-netural-secondary-medium border rounded-2xl border-green-theme hover:bg-success-strong focus:ring-4 focus:ring-green-theme shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"></button>
                </div>

                <div id = "id-hour-01" className = "flex items-center gap-3 row time-div">
                    <p className = "w-20 text-right shrink-0 text-xs  whitespace-nowrap">1:00 AM</p>
                    <button type="button" className ="w-full h-10 bg-netural-secondary-medium border rounded-2xl border-green-theme hover:bg-success-strong focus:ring-4 focus:ring-green-theme shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"></button>
                </div>

            

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