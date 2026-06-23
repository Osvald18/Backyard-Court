import NavBar from "../components/navBar";
import Calendar from "react-calendar";



export function BookingPage() {
    return(
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
            <NavBar />

            <form className="max-w-sm mx-auto">
            <div className="mb-5">
                <label className="block mb-2.5 text-sm font-medium text-heading">Name: </label>
                <input type="Name" id="Name" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="name@flowbite.com" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2.5 text-sm font-medium text-heading">Contact Number: </label>
                <input type="Contact Number" id="Contact Number" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="••••••••" required />
            </div>
            <label className="flex items-center mb-5">
                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft" required />
                <p className="ms-2 text-sm font-medium text-heading select-none">I agree with the <a href="#" className="text-fg-brand hover:underline">terms and conditions</a>.</p>
            </label>
            <button type="submit" className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit</button>
            </form>

            <Calendar />

            </div>
        </main>
    );

}