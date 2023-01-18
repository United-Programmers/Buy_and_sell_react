import React from 'react';
import MetaTags from 'react-meta-tags';
import { Col, Row, Card, CardBody, Container } from "reactstrap"
import "./style.scss"
import AdminSidebarContent from 'components/HorizontalLayout/AdminSidebarContent';
import PageWrapper from 'components/PageWrapper';

function Layout(props) {

    return (
        <React.Fragment>
            <div className="page-content">
                <PageWrapper>
                    <Row className='Account-container mt-4'>
                        <Col md={3} sm={12} className='sidebar'>
                            <AdminSidebarContent />
                        </Col>

                        <Col m={9}>
                            {props.children}
                        </Col>
                    </Row>
                </PageWrapper>
            </div>
        </React.Fragment>
    )
}

export default Layout