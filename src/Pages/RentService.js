import React from 'react';

import '../Components/style.css'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import RentServ from "../Components/RentServ";

export default function RentService() {
    return (
        <>
            <Header></Header>
                <RentServ></RentServ>
            <Footer></Footer>
        </>
    );
}
