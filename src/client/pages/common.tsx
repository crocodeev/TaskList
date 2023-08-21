import React, { useEffect } from 'react'
import CardList from '../components/cardList'
import CardsPaginator from '../components/paginator'
import { Container, Col, Row } from 'react-bootstrap'


const CommonPage: React.FunctionComponent<unknown> = () => {

    return(
        <Container>
            <Row>
                <Col>
                    <CardList />
                </Col>     
            </Row>

            <Row>
                <Col>
                    <CardsPaginator />
                </Col> 
            </Row>
            
        </Container>
    )
}

export default CommonPage
