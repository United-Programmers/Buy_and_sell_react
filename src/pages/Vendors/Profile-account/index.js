// import React from "react"
// import MetaTags from 'react-meta-tags';
// import { Col, Container, Row } from "reactstrap"
// import Breadcrumb from "components/Common/Breadcrumb";
// import PageWrapper from "components/PageWrapper";
// import { Link } from "react-router-dom";
// import Layout from "../../Layout"

// const VendorAccount = () => {

//     return (
//         <Layout>

//         </Layout>
//     )
// }

// export default VendorAccount



import React from 'react';
// import "./../Styles.scss"
import MetaTags from 'react-meta-tags';
import { Col, Row, Card, CardBody, Container } from "reactstrap"
import "./style.scss"
import SidebarContent from 'components/HorizontalLayout/SidebarContent';
import PageWrapper from 'components/PageWrapper';

function Layout(props) {

    return (
        <React.Fragment>
            <div className="page-content">
                <PageWrapper>
                    <Row className='Account-container mt-4'>
                        <Col md={3} className='sidebar'>
                            <SidebarContent />
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