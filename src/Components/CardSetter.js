import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import libHer from '../assets/liebherr_card.jpg';
import {Link} from "react-router-dom";

export default function CardSetter() {
    return (
        <Row xs={1} md={3} className="g-4 m-5" id="MYcards">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col key={idx}>
                    <Link to='/Cranes/1'>
                        <Card >
                            <Card.Img variant="top" src={libHer} />
                            <Card.Body>
                                <Card.Title style={{textAlign: 'center'}}>Liebherr 90 EC-B6</Card.Title>
                                <Card.Text style={{textAlign: 'center'}}>
                                    Crane Short Description.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            ))}
        </Row>
        );
}