import React from 'react';

import '../Components/style.css'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import RentServ from "../Components/RentServ";

export default function RentService() {
    return (
        <>
            <Header></Header>
            <figure className="text-center">
                <h1>Аренда Грузоподемной Техники</h1>
            </figure>


            <div className="AboutContent">
                <p>
                    В наше время развитие современных технологий позволяет строить объекты разной сложности в
                    короткие строки и -
                    <br/>
                    самое главное - на высоком техническом уровне, но часто случается так, что обычные краны не
                    могут обслужить<br/>
                </p>
            </div>
            <RentServ></RentServ>
            <Footer></Footer>
        </>
    );
}
