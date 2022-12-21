import React from "react"
import "./style.scss"
import MetaTags from 'react-meta-tags';
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";
import Shops from "./components/Shops";

const VendorShop = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags title_sco="Vendor Shop page | Buy and sell" />

                <PageWrapper>
                    <Breadcrumb default="/vendor-shop" defaultName="Vendor-Shop" title="shops" />
                    <Shops />
                </PageWrapper>

            </div>
        </React.Fragment>
    )
}

export default VendorShop