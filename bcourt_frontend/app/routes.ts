import { type RouteConfig, index, route } from "@react-router/dev/routes";
import { BookingPage }  from "./welcome/BookingPage";


               // 1.) a url pattern to match the url and the urls itself
               // ex: route ("about", "routes/about.tsx"),

export default [index("routes/home.tsx"),
            route("/book", "routes/book.tsx")
] satisfies RouteConfig;
