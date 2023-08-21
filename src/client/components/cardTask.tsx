import React from 'react'
import Card from 'react-bootstrap/Card';
import { TCard } from 'src/types';

const CardTask: React.FunctionComponent<unknown> = ({ card } : { card: TCard}) => {

    const { id, username, message, mail} = card
    
    
    return(
        <Card>
            <Card.Header>
                <Card.Title>{username}</Card.Title>
                    <Card.Subtitle>{mail}</Card.Subtitle>
                </Card.Header>
            <Card.Body>
                <Card.Text>{message}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CardTask