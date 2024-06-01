import React from 'react';

import '../style.css'
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
                    Наша компания имеет башенные краны 3 надежным и проверенных фирм. В зависимости от необходимых
                    условий и критериев мы поможем Вам подобрать наилучшее решение с гарантией качества.
                    <br/>
                    Ниже приведены фирмы башенных кранов, доступных для аренды. <br/>
                    <br/>
                </p>
            </div>
            <RentServ></RentServ>
            <Footer></Footer>
        </>
    );
}
