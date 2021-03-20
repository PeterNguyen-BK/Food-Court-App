import React, { useState, useEffect, useContext, useRef } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { CartContext } from '../contexts/CartContext';
import { NavContext } from '../contexts/NavContext';
import queryString from 'query-string';
import axios from 'axios';
import './Foods.css';

const Foods = () => {

    const [Foods, setFoods] = useState([]);
    const {Filters, handlePageChange, handleFilterChange} = useContext(NavContext);
    const [Pagination, setPagination] = useState({
        page: 1,
        limit: 5,
        totalRows: 1
    });
    const totalPage = Math.ceil(Pagination.totalRows/Pagination.limit);

    useEffect(() => {
        const getData = async() => {
            const paramString = queryString.stringify(Filters);
            const res = await axios.get(`/foods?${paramString}`);
            const {page, limit, totalRows, resultFoods} = res.data;
            setFoods(resultFoods);
            setPagination({page, limit, totalRows});
            localStorage.setItem('Filters', JSON.stringify({page, limit, term: Filters.term}));
        }
        getData();
    }, [Filters]);

    // const handlePageChange = (newPage) => {
    //     setFilters({
    //         ...Filters,
    //         page: newPage
    //     });
    // };

    // const handleFilterChange = (newFilter) => {
    //     setFilters({
    //         ...Filters,
    //         page: 1,
    //         term: newFilter
    //     })
    // }

    let index = [];
    for (let i = 0; i < totalPage; i++) {
        index.push(i+1);
    }
    
    const {addedFood, addToCart} = useContext(CartContext);
    
    return (
        <div>
            <Container className="list-foods">
                <Row>
                    {Foods.map(Food => (
                        <Col sm="4" key={Food._id}>
                            <Card style={{ width: '18rem', height: '380px', marginBottom: '20px' }}>
                                <Card.Img variant="top" src={ Food.image } style={{height: '200px'}}/>
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
            {totalPage > 1 && <nav aria-label="Page navigation example" style={{marginTop: "20px", float: "right", marginRight: "50px"}}>
                <ul className="pagination">
                    <button className="changePage-btn" disabled={Pagination.page <= 1} onClick={() => handlePageChange(parseInt(Pagination.page) - 1)}>Previous</button>
                    {index.map(i =>(
                        <li className="page-item page-link" key={i} onClick={() => handlePageChange(i)}>{ i }</li>
                    ))}
                    <button className="changePage-btn" disabled={Pagination.page >= totalPage} onClick={() => handlePageChange(parseInt(Pagination.page) + 1)}>Next</button>
                </ul>
            </nav>}
        </div>
    );
}

export default Foods;