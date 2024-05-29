import React from 'react';

import '../style.css'

export default function RentServ() {
    return (
        <div className={'main-RentServ'}>
            <img src="../assets/potain_logo.jpg" className="figure-img img-fluid rounded" alt=""/>
            <img src="../assets/potain_logo.jpg" className="figure-img img-fluid rounded" alt=""/>
            <img src="../assets/potain_logo.jpg" className="figure-img img-fluid rounded" alt=""/>
            <h1>Аренда Грузоподемной техники</h1>
            <div className={'container px-4 py-5'}>
                <h2 className={'class="pb-2 border-bottom"'}>Аренда Грузоподемной техники</h2>
                <div className={'row g-4 py-5 row-cols-1 row-cols-lg-3'}>
                    <figure className="figure">
                        <img src="../assets/potain_logo.jpg" className="figure-img img-fluid rounded" alt=""/>
                        <figcaption className="figure-caption text-end">A caption for the above image.</figcaption>
                    </figure>
                </div>
            </div>

        </div>
    );
}