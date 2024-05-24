import React, {Component} from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MediaQuery from "react-responsive";
import {Image} from "react-bootstrap";
import Table from 'react-bootstrap/Table';

import '../Components/CranSlides.css'
export default class CraneDes  extends Component {

    render() {
        return (
            <div className='Main-Container' style={{backgroundColor: '#ffffff'}}>
                <Header/>
                {/*Desktop*/}
                <MediaQuery query='(min-device-width: 1224px)'>

                    <div className='CraneDes-Desctop' style={{backgroundColor: '#ffffff'}}>
                        <hr/>
                        <h1>Liebherr 90 EC-B6</h1>
                        <hr/>
                        <Image className={'Cran-Desktop-Image'} src={require('../Components/liebherr_card.jpg')}
                               rounded/>
                        <div className='CraneDes-Desctop-Table' style={{color: '#cfcfcf'}}>
                            <h3 style={{color: '#2b2a29', textAlign: 'center'}}> Технические Характеристики</h3>
                            <Table striped borderless hover>
                                <tbody>
                                <tr>
                                    <td>Марка, модель</td>
                                    <td>Liebherr 90 EC-B6</td>
                                </tr>
                                <tr>
                                    <td>Грузоподъемность
                                        максимальная, т
                                    </td>
                                    <td>6</td>
                                </tr>
                                <tr>
                                    <td>Вылет максимальный, м
                                    </td>
                                    <td>50</td>
                                </tr>
                                <tr>
                                    <td>Грузоподъемность на
                                        максимальном вылете, т
                                    </td>
                                    <td>1,5</td>
                                </tr>
                                <tr>
                                    <td>Вылет при максимальной
                                        грузоподъемности, м
                                    </td>
                                    <td>15,5
                                    </td>
                                </tr>
                                <tr>
                                    <td>Высота подъема
                                        свободностоящего крана, м
                                    </td>
                                    <td>51,2
                                    </td>
                                </tr>
                                <tr>
                                    <td>Высота подъема при
                                        креплении к зданию, м
                                    </td>
                                    <td>100
                                    </td>
                                </tr>
                                </tbody>

                            </Table>
                        </div>
                    </div>
                </MediaQuery>

                {/*Mobile*/}
                <MediaQuery query='(max-device-width: 1224px)'>
                <div className='CraneDes-Mobile' style={{backgroundColor: '#ffffff'}}>
                        <Image className={'Cran-Mobile-Image'} src={require('../Components/liebherr_card.jpg')}
                               rounded/>

                        <div className='CraneDes-Mobile-Table' style={{color: '#cfcfcf'}}>
                            <h3 style={{color: '#2b2a29'}}>Характеристики</h3>
                            <Table striped borderless hover>

                                <tbody>
                                <tr>
                                    <td >Марка, модель</td>
                                    <td >Liebherr 90 EC-B6</td>
                                </tr>
                                <tr>
                                    <td >Грузоподъемность
                                        максимальная, т
                                    </td>
                                    <td >6</td>
                                </tr>
                                <tr>
                                    <td >Вылет максимальный, м
                                    </td>
                                    <td >50</td>
                                </tr>
                                <tr>
                                    <td >Грузоподъемность на
                                        максимальном вылете, т
                                    </td>
                                    <td >1,5</td>
                                </tr>
                                <tr>
                                    <td >Вылет при максимальной
                                        грузоподъемности, м
                                    </td>
                                    <td >15,5
                                    </td>
                                </tr>
                                <tr>
                                    <td >Высота подъема свободностоящего крана, м
                                    </td>
                                    <td >51,2
                                    </td>
                                </tr>
                                <tr>
                                    <td >Высота подъема при креплении к зданию, м
                                    </td>
                                    <td >100
                                    </td>
                                </tr>
                                </tbody>

                            </Table>
                        </div>
                    </div>
                </MediaQuery>
                <Footer/>
            </div>
        );
    }
}