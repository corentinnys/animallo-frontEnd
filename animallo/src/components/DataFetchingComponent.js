// src/components/DataFetchingComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';

function DataFetchingComponent() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://dog.ceo/api/breeds/list/all')
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    const breeds = data ? Object.keys(data.message) : [];
    const midIndex = Math.ceil(breeds.length / 2);
    const firstHalf = breeds.slice(0, midIndex);
    const secondHalf = breeds.slice(midIndex);
    return (
        <div>
            <Row>
                <Col>
                    {firstHalf.map((breed) => (
                        <div key={breed}>
                            <label>{breed}</label>
                            <input type="checkbox" />
                        </div>
                    ))}
                </Col>
                <Col>
                    {secondHalf.map((breed) => (
                        <div key={breed}>
                            <label>{breed}</label>
                            <input type="checkbox" />
                        </div>
                    ))}
                </Col>
            </Row>
        </div>
    );
}

export default DataFetchingComponent;
