import React from 'react';
import Navigation from "../Navigation/Navigation";
import { Container,Row, Col} from 'react-bootstrap'
import DataFetchingComponent from "./DataFetchingComponent";
import Cards from "./Cards";

function Eleveurs() {
    const style = {
        border: '2px solid black',
        padding: '20px',
        background:'red'
    };

    return (
        <Container>
            <Row>
                <Col>
                 <div style={style}>
                     <h2>Chats</h2>

                     <h2>Chiens</h2>
                     <DataFetchingComponent />
                 </div>
                </Col>
                <Col>
                 <Cards></Cards>
                </Col>
            </Row>
        </Container>
    );
}
export default Eleveurs;