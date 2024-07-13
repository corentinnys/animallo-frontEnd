import React from 'react';
import {Col, Row, Button, Container} from 'react-bootstrap';
import './Cards.css'; // Assurez-vous que le chemin est correct

function Cards() {
    const starsCount = 3;
    const stars = [];
    for (let i = 0; i < starsCount; i++) {
        stars.push(<span key={i}>⭐️</span>);
    }
    return (
        <Row xs={1} md={12} lg={12} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col key={idx}>
                    <div className="card">
                        <Row className="align-items-start">
                            <Col xs={4}>
                                <img
                                    className="card-img mt-4"
                                    src={`${process.env.PUBLIC_URL}/images/eleveurs.jpg`}
                                    alt="Eleveurs"
                                />
                            </Col>
                            <Col xs={8}>
                                <div className="card-body p-2">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <h5 className="card-title mb-0">Louis Devivier</h5>
                                        <div className="stars">
                                            {stars}
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="icon me-2"
                                            src={`${process.env.PUBLIC_URL}/images/pin.png`}
                                            alt="localisation"
                                        />
                                        <p className="m-0">Hannut</p>
                                    </div>
                                    <div className="d-flex align-items-center mt-2">
                                        <img
                                            className="icon me-2"
                                            src={`${process.env.PUBLIC_URL}/images/chat.png`}
                                            alt="localisation"
                                        />
                                        <p className="m-0 me-2">chats</p>
                                        <img
                                            className="icon me-2"
                                            src={`${process.env.PUBLIC_URL}/images/chien.png`}
                                            alt="localisation"
                                        />
                                        <p className="m-0">chiens</p>
                                    </div>
                                    <div className="text-end mt-3">
                                        <Button variant="primary">Voir l'eleveur</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            ))}
        </Row>
    );
}

export default Cards;
