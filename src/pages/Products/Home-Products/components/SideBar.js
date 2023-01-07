import React from 'react'
import { Col, Container, Row, CardBody, Card } from "reactstrap"
import Filter__one from './Filter/Filter__one'

function SideBar() {
  return (
    <div className='side__bar' id="side__bar">
      <CardBody>
        <Filter__one />
      </ CardBody>
    </div>
  )
}

export default SideBar