import React from 'react';
import "./Style.scss";
import { Spinner } from "reactstrap"

function CustomBtn({ Pending, btnName, onClick, icon }) {
    return (
        <button onClick={onClick} className="btn btn-custom-primary mt-4" type="submit">
            {!Pending ? <span className="me-2">{btnName} <span> {icon} </span>  </span> : null}
            {!Pending ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...  </span>}
        </button>
    )
}

export default CustomBtn