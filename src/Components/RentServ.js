import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import libHer from '../assets/Frame-164liebherr.png';
import Terex from '../assets/terex_logo.png';
import Potain from '../assets/potain_logo.jpg';
import {Link} from "react-router-dom";

import '../Components/style.css'
export default function RentServ() {
    return (
        <div className={'main-RentServ'}>
            {/*<img src={require('../assets/potain_logo.jpg')} className="figure-img img-fluid rounded" alt=""/>*/}
            {/*<img src={require('../assets/slideLibher.jpg')} className="figure-img img-fluid rounded" alt=""/>*/}
            {/*<img src={require('../assets/terex_logo.png')} className="figure-img img-fluid rounded" alt=""/>*/}
            {/*<div className="container-fluid">*/}
            {/*    <div className="row" style={{alignItems: "center"}}>*/}
            {/*        <div className="col-md-4" ><img alt="" src={require('../assets/potain_logo.jpg')}*/}
            {/*                                       className="img-responsive" style={{width:'30%', alignItems: "center"}}/></div>*/}
            {/*        <div className="col-md-4"><img alt="" src={require('../assets/potain_logo.jpg')}*/}
            {/*                                       className="img-responsive center-block" style={{width:'30%', alignItems: "center"}}/></div>*/}
            {/*        <div className="col-md-4"><img alt="" src={require('../assets/potain_logo.jpg')}*/}
            {/*                                       className="img-responsive pull-right" style={{width:'30%', alignItems: "center"}}/></div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <Row>
                <div style={{width: '30%'}}>
                    <Col key={1}>
                        <Link to='/Cranes/1'>
                            <Card>
                                <Card.Img variant="top" src={libHer}/>
                                <Card.Body>
                                    <Card.Title style={{textAlign: 'center'}}>Liebherr 90 EC-B6</Card.Title>
                                    <Card.Text style={{textAlign: 'center'}}>
                                        Leibher
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                </div>
                <div style={{width: '36.08%'}}>
                    <Col key={2}>
                        <Link to='/Cranes/2'>
                            <Card>
                                <Card.Img variant="top" src={Terex}/>
                                <Card.Body>
                                    <Card.Title style={{textAlign: 'center'}}>Terex 116</Card.Title>
                                    <Card.Text style={{textAlign: 'center'}}>
                                        Terex
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                </div>
                <div style={{width: '31%'}}>
                    <Col key={3}>
                        <Link to='/Cranes/3'>
                            <Card>
                                <Card.Img variant="top" src={Potain}/>
                                <Card.Body>
                                    <Card.Title style={{textAlign: 'center'}}>Potain 11</Card.Title>
                                    <Card.Text style={{textAlign: 'center'}}>
                                        Potain
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                </div>

            </Row>
            {/*<div className="row g-0 bg-light position-relative">*/}
            {/*    <div className="col-md-6 mb-md-0 p-md-4">*/}
            {/*        <img src={libHer} className="w-100" alt="..."/>*/}
            {/*    </div>*/}

            {/*    <div className="col-md-6 p-4 ps-md-0">*/}
            {/*        <h5 className="mt-0">Columns with stretched link</h5>*/}
            {/*        <p>Another instance of placeholder content for this other custom component. It is intended to mimic*/}
            {/*            what some real-world content would look like, and we're using it here to give the component a*/}
            {/*            bit of body and size.</p>*/}
            {/*        <a href="#" className="stretched-link">Go somewhere</a>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="row g-0 bg-light position-relative">*/}
            {/*    <div className="col-md-6 mb-md-0 p-md-4">*/}
            {/*        <img src={Potain} className="w-100" alt="..."/>*/}
            {/*    </div>*/}
            {/*    <div className="col-md-6 p-4 ps-md-0">*/}
            {/*        <h5 className="mt-0">Columns with stretched link</h5>*/}
            {/*        <p>Another instance of placeholder content for this other custom component. It is intended to mimic*/}
            {/*            what some real-world content would look like, and we're using it here to give the component a*/}
            {/*            bit of body and size.</p>*/}
            {/*        <a href="#" className="stretched-link">Go somewhere</a>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={'container px-4 py-5'}>*/}
            {/*    /!*<h2 className={'class="pb-2 border-bottom"'}>Аренда Грузоподемной техники</h2>*!/*/}
            {/*    <div className={'row g-4 py-5 row-cols-1 row-cols-lg-3'}>*/}
            {/*        <figure className="figure">*/}
            {/*            <img src="../assets/potain_logo.jpg" className="figure-img img-fluid rounded" alt=""/>*/}
            {/*            <figcaption className="figure-caption text-end">A caption for the above image.</figcaption>*/}
            {/*        </figure>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>
    );
}