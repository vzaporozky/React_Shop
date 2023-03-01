import MainPage from "../pages/MainPage/MainPage";

import Login from "../pages/Login/Login";

export const privetRouter = [
    {path:'/', component: MainPage, exact: true},
];
export const publicRouter = [
    {path: '/Login', component: Login, exact: true},
];