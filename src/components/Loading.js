import React from 'react'
import { Spinner } from "reactstrap";

function Loading() {
    return (
        <React.Fragment>
            <div className="page-content">
                <div className="d-flex justify-content-center align-item-center mt-5">
                    <Spinner className="ms-2" color="success" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Loading