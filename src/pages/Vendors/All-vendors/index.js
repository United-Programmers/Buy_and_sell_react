import React from "react"
import MetaTags from 'react-meta-tags';
import { Col, Container, Row } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";
import { Shop } from "@mui/icons-material";
import Shops from "./Shops";

const VendorShop = () => {
return <Shops/>
    // return (
    //     <React.Fragment>
    //         <div className="page-content">
    //             <MetaTags title_sco="Vendor Shop page | Buy and sell" />

    //             <PageWrapper>
    //                 <Breadcrumb default="/vendor-shop" defaultName="Vendor-Shop" title="shops" />

    //                 <h1 className="page-title">VendorShop pages</h1>
    //             </PageWrapper>

    //         </div>
    //     </React.Fragment>
    // )
}

export default VendorShop
