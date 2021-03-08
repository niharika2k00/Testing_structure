
import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import './card.css';


const cardItems = ( /*props*/  { image, title, description, head_pass }) => {
    // const { image, title, description } = props.data;

    const headChange = () => {
        console.log(title);
        head_pass(title);
    }



    return (
        <div className="card" onClick={() => headChange()} >
            <Col lg={4} md={4}  >
                <Card style={{ width: '18rem' }} >
                    <Card.Img variant="top" src={image} />

                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>  {description}   </Card.Text>
                        <Button variant="dark" size="sm" >learn more..</Button>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    )
}

export default cardItems
