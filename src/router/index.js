import MainPage from "../pages/MainPage/MainPage";
import CandlePage from './../pages/CandlePage/CandlePage';

import Login from "../pages/Login/Login";

export const privetRouter = [
    {path:'/Candles', component: MainPage, exact: true},
    {path:'/Candles/:id', component: CandlePage, exact: true},
];
export const publicRouter = [
    {path: '/Login', component: Login, exact: true},
];