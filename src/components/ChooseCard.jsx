import React from 'react';
import { Container, Col, Row, Button, Card} from 'react-bootstrap';
import "../pages/Home.css"
let Counter = () => {
    return (
        
            <Container variant="sm">
                <Row>
                    <h1 style={{color: 'white'}}>Authentic food on your table</h1>
                </Row>
                <Row>
                    <Col md={4}>
                        <p style={{color: 'white'}}>Various options to choose from the list of local restaurants:</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        
                        <Card md={4} className='shadow-lg' id="shadow" style={{marginTop: 50, marginBottom: 50, backgroundColor: 'transparent'}}>
                            <Card.Body>
                                <p className='display-6' style={{color: 'white'}}>I am...</p>
                                <Button variant='success' className='m-1'>Customer</Button> 
                                <Button variant='success' className='m-1'>Restaurateaur</Button>
                            </Card.Body>
                        </Card>
                       
                    </Col>
                </Row>
            </Container>
        
    )
};

export default Counter;