import React from 'react'
import { Spinner } from "reactstrap";

function ErrorPage({ message }) {
    return (
        <React.Fragment>
            <div className="page-content">
                <div className="d-flex justify-content-center align-item-center mt-5">
                    <h4> {message} </h4>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ErrorPage