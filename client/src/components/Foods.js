import React, { useState, useEffect, useContext, useRef } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { CartContext } from '../contexts/CartContext';
import axios from 'axios';

function Foods() {

    const [Foods, setFoods] = useState([]);

    useEffect(async() => {
        let isUnmount = false;
        const res = await axios.get('/foods/');
        if (!isUnmount) setFoods(res.data);
        return () => {
            isUnmount = true;
        };
    }, []);

    const {addedFood, addToCart} = useContext(CartContext);
    
    return (
        <Container>
            <Row>
                {Foods.map(Food => (
                    <Col sm="4" key={Food._id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={ Food.image } />
                            <Card.Body>
                                <Card.Title>{ Food.name }</Card.Title>
                                <Card.Text>
                                    Price: { Food.price } VND
                                </Card.Text>
                                <Button variant="primary" onClick={() => addToCart(Food)}>
                                    Add to Cart
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                ))}
            </Row>
        </Container>
        
    );
}

export default Foods;