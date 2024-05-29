import React from 'react';
import {MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput} from 'mdb-react-ui-kit';

import '../style.css';


export default function Footer() {
    return (
        <div className='my-FooterClass' style={{marginTop: '-48px'}}>
            <MDBFooter className='text-center text-lg-start text-muted'>
                <section className='m-5'>
                    <form action='' className='My-Form-for-email'>
                        <MDBRow className='d-flex justify-content-center m-5'>
                            <MDBCol size="auto">
                                <p className='pt-2'>
                                    <strong>Подпишитесь на рассылку ВираКран</strong>
                                </p>
                            </MDBCol>

                            <MDBCol md='5' start>
                                <MDBInput contrast type='email' label='Адрес электронной почты' className='mb-4'/>
                            </MDBCol>

                            <MDBCol size="auto">
                                <button className={' btn btn-outline-light'} type='submit'>Подписаться</button>
                            </MDBCol>
                        </MDBRow>
                    </form>
                </section>
                <hr className='m-5'/>
                <section className='My-section'>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon icon="gem" className="me-3"/>
                                    ViraKran
                                </h6>
                                <p>
                                    Аренда и монтаж грузоподемной техники, на территории всей Российской федерации и
                                    СНГ.
                                </p>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Услуги</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Аренда Грузоподемной техники
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Монтаж Грузоподемной техники
                                    </a>
                                </p>

                            </MDBCol>

                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Проекты</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Проект1
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Проект2
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Проект3
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Проект4
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Контакты</h6>
                                <p>
                                    <MDBIcon icon="home" className="me-2"/>
                                    г. Краснодар ул.<br/> Сормовская 185 офис 21
                                </p>
                                <p>
                                    <MDBIcon icon="envelope" className="me-3"/>
                                    Virakran-yug@mail.ru
                                </p>
                                <p>
                                    <MDBIcon icon="phone" className="me-3"/> + 7 987 169 63 55
                                </p>
                                <p>
                                    <MDBIcon icon="print" className="me-3"/> + 7 987 169 63 55
                                </p>
                            </MDBCol>

                        </MDBRow>
                    </MDBContainer>
                </section>

                <hr/>
                <div className='copyRightFooter'>
                    © 2024 Copyright:
                    <a className='text-reset fw-bold' href='/'>
                        ViraKran.ru
                    </a>
                </div>
            </MDBFooter>
        </div>
    );
}