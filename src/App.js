import React, {useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import './styles/App.css';
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";
import Footer from './components/UI/Footer/Footer';

function App() {
    const [isAuth, setIsAuth] = useState(false);

    
    useEffect(() => {
        if(localStorage.getItem('auth')) setIsAuth(true);
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
                <Footer/>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
