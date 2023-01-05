import React from "react"
import "./style.scss"
import MetaTags from 'react-meta-tags';
import { Col, Container, Row } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";
import Layout from "../index"

const AddProducts = () => {

    return (
        // <React.Fragment>
        //     <div className="page-content">
        //         <MetaTags title_sco="add products page | Buy and sell" />

        //         <PageWrapper>
        //             <Breadcrumb default="/vendor-addProduct" defaultName="Add-product" title="add new products" />


        //             {/* WRITE YOUR CODE HERE */}
        //             <h1 className="page-title"> Vendor Add Products </h1>


        //         </PageWrapper>

        //     </div>
        // </React.Fragment>
        <Layout>
            <h1 className="page-title"> Add new products </h1>
        </Layout>
    )
}

export default AddProducts