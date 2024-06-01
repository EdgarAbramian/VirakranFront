import React from 'react';
import { MDBRow, MDBCol, MDBInput, MDBTextArea } from 'mdb-react-ui-kit';

import './style.css'


export default function ContactUs() {
    return (
        <div className='main'>
            <div className='row'>
                <div className='container' id='ContactUs' style={{paddingLeft: '15%'}}>
                    <div className={'Custom-title'}>
                        <div className='mb-3' id='ContactUs-titles'><p id={'ContactUs-titles-sm'}>Эл. почта </p>
                            <h5 id='Custom-title-h5'>Virakran-yug@mail.ru</h5>
                        </div>
                        <div className='mb-3' id='ContactUs-titles'>
                            <p id={'ContactUs-titles-sm'}>Номер </p>
                            <h5 id='Custom-title-h5'> +7 (987) 169-69-55 </h5></div>
                        <div className='mb-3' id='ContactUs-titles'>
                            <p id={'ContactUs-titles-sm'}>Адрес </p>
                            <h5 id='Custom-title-h5'>г.
                            Краснодар
                            ул. Сормовская 185 офис 21</h5></div>
                        </div>
                </div>
            </div>
            <div className='row' id='main_container'>
                <section className='border text-center' id='contact-us-section'>
                    <h3 className='mb-5' style={{marginTop: '0'}}>Contact us</h3>
                    <div className='row' id='maps-form'>
                        <div className='col-lg-5' style={{marginBottom: '1.5rem'}}>
                            <iframe
                                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12094.57348593182!2d-74.00599512526003!3d40.72586666928451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f988156a9%3A0xd54629bdf9d61d68!2sBroadway-Lafayette%20St!5e0!3m2!1spl!2spl!4v1624523797308!5m2!1spl!2spl'
                                className='h-100 w-100'
                                style={{border: '0'}}
                                loading='lazy'
                            ></iframe>
                        </div>
                        <div className='col-lg-7'>
                            <form>
                                <div className='row'>
                                    <div className='col-md-9'>
                                        <MDBRow className='mb-4'>
                                            <MDBCol>
                                                <MDBInput label='First name' id='form3FirstName'/>
                                            </MDBCol>
                                            <MDBCol>
                                                <MDBInput label='Email Address' id='form3Email'/>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBInput
                                            type='text'
                                            label='Subject'
                                            id='form3Subject'
                                            v-model='form3Subject'
                                            wrapperClass='mb-4'
                                        />
                                        <MDBTextArea label='Message' id='form3Textarea' wrapperClass='mb-4' />
                                        <button  className='bg-dark mb-4' id={'send-button'}>
                                            {' '}
                                            Send{' '}
                                        </button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}