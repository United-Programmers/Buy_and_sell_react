import React from 'react';
// import "./../Styles.scss"
import MetaTags from 'react-meta-tags';
import { Col, Row, Card, CardBody, Container } from "reactstrap"
import "./Styles.scss"
import SidebarContent from 'components/HorizontalLayout/SidebarContent';
import PageWrapper from 'components/PageWrapper';

function Layout(props) {

    return (
        <React.Fragment>
            <div className="page-content">
                <PageWrapper>
                    <Row className='Account-container'>
                        <Col md={3} className='sidebar'>
                            <SidebarContent />
                        </Col>

                        <Col m={9} className='content'>
                            {props.children}
                        </Col>
                    </Row>
                </PageWrapper>
            </div>
        </React.Fragment>
    )
}

export default Layout