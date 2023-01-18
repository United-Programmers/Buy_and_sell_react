import React, { useState, useRef } from "react"
import "./style.scss"
import MetaTags from 'react-meta-tags';
import { Col, Container, Row, Card, CardBody, Button, Badge } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";
import Layout from "../index"
import { FcAddImage } from 'react-icons/fc';
import { BsPersonCircle } from 'react-icons/bs';
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import CustomBtn from 'components/CustomBtn';
import { MdOutlineDashboardCustomize } from "react-icons/md";

import AccountUpload from "./components/AccountUpload";


const AccountSettings = () => {
    const refFileUploadImageCover = useRef(null);
    const [imageCoverServer, setImageCoverServer] = useState();
    const [imageCover, setImageCover] = useState();
    

    const onThumbChangeClickImageCover = () => {
        if (refFileUploadImageCover) {
            refFileUploadImageCover.current.dispatchEvent(new MouseEvent('click'));
        }
    };
    const changeThumbImageCover = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImageCoverServer(event.target.files[0]);

            const reader = new FileReader();
            reader.onload = (loadEvent) => {
                setImageCover(loadEvent.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);

            
        }
    };

    return (
        <Layout>
            <div>

                <Card>
                    <CardBody>
                        <Row>
                            <Col md={12} className="text-center margin-0 position-relative">
                                <label>Upload 2000 * 1333 </label>
                                <div className="d-flex justify-content-center align-items-center border upload__img">
                                    <img  src={imageCover === undefined ? Image : imageCover} alt="Upload image cover" width={500} height={200} />
                                    <Badge className="btn-icon btn-icon-only position-absolute"
                                        onClick={onThumbChangeClickImageCover}
                                    > <FcAddImage size={40} />
                                    </Badge>
                                    <input type="file" ref={refFileUploadImageCover} className="file-upload d-none" accept="image/*" onChange={changeThumbImageCover} />
                                </div>
                            </Col>
                            
                            
                            <Col className="avatar-upload position-absolute">
                                <div className="upload__profile position-relative">
                                    
                                        <img className="position-absolute" src={imageCover === undefined ? Image : imageCover} alt="" width={50} height={20} />
                                        <div className='upload-av-icon position-absolute'> <BsPersonCircle/></div>
                                        <Badge className="btn-icon btn-upload btn-icon-only position-absolute "
                                            onClick={onThumbChangeClickImageCover}
                                        > <FcAddImage size={30} />
                                        </Badge>
                                        <input type="file" ref={refFileUploadImageCover} className="file-upload d-none" accept="image/*" onChange={changeThumbImageCover} />
                                
                                </div>
                            </Col>
                            <Col className="card-up-form-one">
                                <AvForm
                                            className="form-horizontal mt-4"
                                            onValidSubmit={(e, v) => {
                                                handleValidSubmit(e, v)
                                            }}
                                        >
                                            <div class="p-word-contain">
                                                <div className="mb-3 myInput upload-input">
                                                    <span className="icon-one">< MdOutlineMarkEmailRead /></span>
                                                    <AvField
                                                        name="email"
                                                        label="Email Address"
                                                        className="form-control first-form"
                                                        placeholder="Enter email"
                                                        type="email"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            

                                            
                                        </AvForm>
                            </Col>
   
                        </Row>
                    </CardBody>
                </Card>
                
                
                <AccountUpload/>

            </div>
        </Layout>
    )
}

export default AccountSettings