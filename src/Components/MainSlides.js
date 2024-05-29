import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

import slideImg from '../assets/slideImg.jpg'
import slideImg1 from '../assets/slideImg1.jpg'
import slideImg2 from '../assets/liebherr.jpg'

import '../style.css'

export default function MainSlides() {
    return (
        <MDBCarousel showIndicators showControls fade style={{backgroundColor: '#2b2a29'}}>
            <MDBCarouselItem itemId={1}>
                <img src={slideImg}
                     className="d-block w-100"  alt='...' />
                <MDBCarouselCaption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId={2}>
                <img src={slideImg1}
                     className="d-block w-100"  alt='...' />
                <MDBCarouselCaption></MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId={2}>
                <img src={slideImg2}
                     className="d-block w-100"  alt='...' />
                <MDBCarouselCaption></MDBCarouselCaption>
            </MDBCarouselItem>
        </MDBCarousel>
    );
}

