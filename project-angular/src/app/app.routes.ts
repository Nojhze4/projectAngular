import { Routes } from '@angular/router';
import { Home } from "./components/pages/home/home";
import { AboutUs } from "./components/about-us/about-us";
import { Contact } from "./components/contact/contact";
import { PageNotFound } from "./components/pages/page-not-found/page-not-found";

export const routes: Routes = [
    {
        path: "about-us",
        component: AboutUs,
        title: "About-us | Foundations",
    },
    {
        path: "contact",
        component: Contact,
        title: "Contact | Foundations",
    },
    {
        path: "home",
        component: Home,
        title: "Home | Foundations",
    },


    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },

    {
        path: "**",
        component: PageNotFound,
        title: "Error 404 | Page Not Found",
    },
];

