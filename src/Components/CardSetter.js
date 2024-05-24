import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import libHer from './liebherr_card.jpg';
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
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            ))}
        </Row>
        );
}