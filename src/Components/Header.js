import React, {Component, Fragment} from 'react';


import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style.css'

import logo from '../assets/logoVK.png'
import telephone_logo from '../assets/telephone-inbound.png'
import email_logo from '../assets/email_icone.png'
import location_logo from '../assets/location_icone.png'
import {Link} from "react-router-dom";
import RentService from "../Pages/RentService";


export default class Header extends Component {
    render() {
        return (
            <>
                <nav className="Main-Navbar">
                    <div className="container-fluid p-0">
                        <div className="container-fluid container-lg p-0">
                            <div className="textColor">
                                <div className="row justify-content-center align-items-center mx-auto">
                                    <div className="col-12 col-lg-3 p-0">
                                        <div
                                            className="display-3 fw-bold py-2 text-center text-lg-start d-none d-lg-block">
                                            <Link to='/'>
                                            <img className="logoiconHeight"
                                                 src={logo}
                                                 alt="building"/>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-4 col-lg-3 sideLine">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <Link to="https://yandex.ru/maps/-/CDVdRIyB">
                                                <div className="me-3 p-2 py-3"><img className="iconHeight"
                                                                                    src={location_logo}
                                                                                    alt="location"/></div>
                                            </Link>
                                            <div className="d-none d-lg-block"><span
                                                className="fw-medium">г. Краснодар</span><br/> ул. Сормовская 185 офис 21
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 col-lg-3 sideLine">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <Link to="tel:+79871696355">
                                                <div className="me-3 p-2 py-3"><img className="iconHeight"
                                                                                    src={telephone_logo}
                                                                                    alt="telephone"/></div>
                                            </Link>
                                            <div className="d-none d-lg-block"><span
                                                className="fw-medium">Связаться с нами</span><br/> +7 (987) 169-69-55
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 col-lg-3">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <Link to="mailto:Virakran-yug@mail.ru">
                                                <div className="me-3 p-2 py-3"><img className="iconHeight"
                                                                                    src={email_logo}
                                                                                    alt="email"/></div>
                                            </Link>
                                            <div className="d-none d-lg-block"><span
                                                className="fw-medium">Электронная почта</span><br/> Virakran-yug@mail.ru
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-0 d-lg-none"/>
                            <div className="text-center display-3 fw-bold mb-2 d-lg-none"><img className="logoiconHeight"
                                                                                               src={logo}
                                                                                               alt="building"/></div>
                            <div className="navbarBgDark" data-bs-theme="dark">
                                <nav
                                    className="navbar navbar-expand-lg justify-content-center justify-content-lg-between p-0">

                                    <button className="navbar-toggler m-3 w-100" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                                            aria-expanded="false"
                                            aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                        Menu
                                    </button>
                                    <div className="collapse navbar-collapse justify-content-between"
                                         id="navbarNavDropdown">
                                        <ul className="navbar-nav text-uppercase ps-3">
                                            <li className="nav-item">
                                                <Link className="nav-link px-lg-3" to="/about">О компании</Link>
                                            </li>
                                            {/*Перечень услуг*/}
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle px-lg-3" href="#" role="button"
                                                   data-bs-toggle="dropdown" aria-expanded="false">
                                                    Услуги
                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li><Link className="dropdown-item" to="/RentService">Аренда Грузоподемной
                                                        техники</Link></li>
                                                    <li><Link className="dropdown-item" to="/RentService">Монтаж Грузоподемной
                                                        техники</Link></li>
                                                </ul>
                                            </li>
                                            {/*Список кранов*/}
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle px-lg-3" to="/Cranes" role="button"
                                                   data-bs-toggle="dropdown" aria-expanded="false">
                                                    Краны
                                                </Link>
                                                <ul className="dropdown-menu">
                                                    <li><Link className="dropdown-item" to="/Cranes">LIBHERR</Link></li>
                                                    <li><Link className="dropdown-item" to="/Cranes">POTAIN</Link></li>
                                                    <li><Link className="dropdown-item" to="/Cranes">TEREX</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link px-lg-3" to="/Projects">Проекты</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link px-lg-3" to="/Contacts/">Контакты</Link>
                                            </li>
                                        </ul>
                                        <div className="text-white m-1 p-3">
                                            <button className={' btn btn-outline-light'} type='submit'>Оставить заявку</button>

                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}