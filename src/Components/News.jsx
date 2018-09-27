import React, { Component } from 'react';
import { Image, Grid, Row, Col } from 'react-bootstrap';
import './News.css'

class News extends Component {
    render() {
        return (
            <div>
                <Image src="assets/mountain-man.jpg" className="header-image" />
                <Grid>
                    <h2>News</h2>
                    <Row>
                        <Col xs={12} sm={8} className="main-section">
                            <p>Great news</p>
                        </Col>
                        <Col xs={12} sm={4} className="sidebar-section">
                            <Image src="assets/dog-people.jpg" />
                            <p>Great news</p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default News;