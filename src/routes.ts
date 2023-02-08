import React from "react";

// Layout types
import DefaultLayout from "./layouts/Default";

// Route Views
import Home from "./pages/Home/Home";
import Calendar from "./pages/Calendar/Calender";


export default [
    {
        path: "/",
        layout: DefaultLayout,
        component: Home,
    },
    {
        path: "/calendar",
        layout: DefaultLayout,
        component: Calendar
    }
]