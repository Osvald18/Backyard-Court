import type { Route } from "./+types/home";
import { HomePage } from "../welcome/HomePage";
//import { BookingPage } from "../welcome/BookingPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <HomePage />;
}

// export function Book() {
//   return <BookingPage />;
// }




