import type { Route } from "./+types/home";
import { BookingPage } from "../welcome/BookingPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Booking Page" },
    { name: "Schedule a date", content: "Welcome to React Router!" },
  ];
}

export default function Book(){
    return (<BookingPage />);
}