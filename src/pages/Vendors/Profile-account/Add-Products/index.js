import React , { useState, useRef } from "react"
import "./style.scss"
import MetaTags from 'react-meta-tags';
import { Col, Container, Row , Card, CardBody, Button, Badge} from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";
import Layout from "../index"
import { FcAddImage } from 'react-icons/fc';
import CustomBtn from 'components/CustomBtn';
import ProductForm from "./components/ProductForm"

const AddProducts = () => {

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
            <Card>
            <CardBody>
           <Row>
           <Col className="text-center margin-0">
                    <label>Upload 2000 * 1333 </label>
                    <div className="d-flex justify-content-center align-items-center border upload__img">
                        <img src={imageCover === undefined ? Image : imageCover} alt="Upload image cover" width={500} height={200} />
                        <Badge className="btn-icon btn-icon-only position-absolute"
                            onClick={onThumbChangeClickImageCover}
                        > <FcAddImage size={40} />
                        </Badge>
                        <input type="file" ref={refFileUploadImageCover} className="file-upload d-none" accept="image/*" onChange={changeThumbImageCover} />
                    </div>
                </Col>


                <AvForm className="form-horizontal mt-4" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
                   <ProductForm />
                   <div className="bb">
                  <button >Save Product</button>
                   </div>
                </AvForm>
           </Row>
           </CardBody>
           </Card>
        </Layout>
    )
}

export default AddProducts
