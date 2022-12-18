import React from 'react'
import { Container } from 'reactstrap'

function Pagewraper() {
    return (
        <Container fluid>
            <div className="page-title-box">
                {props.children}
            </div>
        </Container>

    )
}

export default Pagewraper