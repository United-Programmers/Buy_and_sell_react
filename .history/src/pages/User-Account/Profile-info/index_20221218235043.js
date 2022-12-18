import React from "react"
import MetaTags from 'react-meta-tags';
import { Col, Container, Row } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";

const Profile = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags title_sco="Profile page | Buy and sell" />

                <PageWrapper>
                    <Breadcrumb default="/profile" defaultName="Profile" title="my profile" />

                    <h1 className="page-title">Profile pages</h1>
                </PageWrapper>

            </div>
        </React.Fragment>
    )
}

export default Profile