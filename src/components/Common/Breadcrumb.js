import React,{useState} from "react"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import { Row, Col, BreadcrumbItem, Dropdown, DropdownToggle, DropdownItem, DropdownMenu } from "reactstrap"

const Breadcrumb = props => {
  const [setting_Menu, setsetting_Menu] = useState(false)

  return (
    <Row className="align-items-center">
      <Col sm={6}>
        <div className="page-title-box">
          <h4 className="font-size-18">{props.breadcrumbItem}</h4>
          <ol className="breadcrumb mb-0">
            {
              (props.maintitle) ?
            <>
            <BreadcrumbItem>
              <Link to="/#">{props.maintitle}</Link>
            </BreadcrumbItem>
            </> : ''
            }
            <BreadcrumbItem>
              <Link to="/#">{props.title}</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>
              {props.breadcrumbItem}
            </BreadcrumbItem>
          </ol>
        </div>
      </Col>
      <Col sm={6}>
        <div className="float-end d-none d-md-block">
          <Dropdown
            isOpen={setting_Menu}
            toggle={() => {
              setsetting_Menu(!setting_Menu)
            }}
          >
            <DropdownToggle color="primary" className="btn btn-primary dropdown-toggle waves-effect waves-light">
              <i className="mdi mdi-cog me-2"></i> Settings
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem tag="a" href="#">Action</DropdownItem>
              <DropdownItem tag="a" href="#">Another action</DropdownItem>
              <DropdownItem tag="a" href="#">Something else here</DropdownItem>
              <DropdownItem divider />
              <DropdownItem tag="a" href="#">Separated link</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </Col>
    </Row>
  )
}

Breadcrumb.propTypes = {
  breadcrumbItem: PropTypes.string,
  title: PropTypes.string
}

export default Breadcrumb
