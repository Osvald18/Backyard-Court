import {useState} from "react";
import { useNavigate } from "react-router";
import courtcanopy from "../assets/courtcanopy.png";
import bcourtpic from "../assets/bcourtpic.png";
import { BookingPage } from "../welcome/BookingPage";
import { Navigate } from "react-router";



const images = [courtcanopy, bcourtpic];


export default function Carousel (){

    const [current, setCurrent] = useState(0);
    const navigate = useNavigate();

    const nextSlide = () => {
       setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    return(
        
    //     {/* Carousel */}
        <div id = "default-carousel" className="absolute w-full" data-carousel = "slide">
          {/* Carousel wrapper */}
          <div className = "relative h-56 overflow-hidden rounded-base md:h-96">
          
          <div className = "duration-700 ease-in-out" data-carousel-item>
            {/* absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 */}
            <img src= {images[current]} className = "absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                     
            </div>    

          <button type="button" onClick = {() => navigate("/book")} className="absolute z-20 bottom-10 left-1/6 -translate-x-1/2 text-white bg-green-theme box-border border border-transparent focus:ring-2 focus:bg-yellow-theme shadow-xs font-medium leading-5 rounded-full text-xl px-15 py-2.5 focus:outline-none">Book Now</button>

          </div>

          {/* slider indicators */}
           <div className = "absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button type="button" className="w-3 h-3 rounded-base" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
          <button type="button" className="w-3 h-3 rounded-base" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
          </div> 

          {/* slider controls */}
          <button onClick= {prevSlide} type="button" className = "absolute top-0 inset-s-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev> 
            <span className= "inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none" >
              <svg className="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/></svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>

          <button onClick= {nextSlide} type="button" className = "absolute top-0 inset-e-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev> 
            <span className= "inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none" >
              <svg className="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/></svg>
              <span className="sr-only">Next</span>
            </span>
          </button>

        </div>

    );

}