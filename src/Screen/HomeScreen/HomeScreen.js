import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CatagoriesBar from '../../components/CatagoriesBar/CatagoriesBar';
import YtVideo from '../../components/Video/YtVideo';
const HomeScreen = () => {
    return (
        <Container>
            <CatagoriesBar/>
            <Row>
               {
                   [...new Array(20)].map(() => (
                    <Col lg={3} md={4}>
                           <YtVideo/>
                    </Col>   
                   ))
               }
            </Row>
        </Container>
    );
};

export default HomeScreen;