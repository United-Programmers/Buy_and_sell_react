import React, { useState, useEffect } from "react"
import PropTypes from 'prop-types'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"
import { withTranslation } from "react-i18next"
import { connect } from "react-redux"
import { withRouter, Link } from "react-router-dom"
import user1 from "../../../assets/images/users/user-4.jpg"
import { BiUserCircle, BiMap } from 'react-icons/bi';
import { SlBasketLoaded } from 'react-icons/sl';
import { MdFavoriteBorder } from 'react-icons/md';
import { CiCreditCard1 } from 'react-icons/ci';

const ProfileMenu = () => {
  const [menu, setMenu] = useState(false)

  return (
    <React.Fragment>
      <Dropdown isOpen={menu} toggle={() => setMenu(!menu)} className="d-inline-block">
        <DropdownToggle className="btn header-item waves-effect" id="page-header-user-dropdown" tag="button">
          <img className="rounded-circle header-profile-user" src={user1} alt="user" />
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          <DropdownItem tag="a" href="/#"> <BiUserCircle size={20} /> Profile info </DropdownItem>
          <div className="dropdown-divider" />
          <DropdownItem tag="a" href="/#"> <SlBasketLoaded size={20} /> Orders </DropdownItem>
          <div className="dropdown-divider" />
          <DropdownItem tag="a" href="/#"> <MdFavoriteBorder size={20} /> Wishlist </DropdownItem>
          <div className="dropdown-divider" />
          <DropdownItem tag="a" href="/#"> <BiMap size={20} /> Addresses </DropdownItem>
          <div className="dropdown-divider" />
          <DropdownItem tag="a" href="/#"> <CiCreditCard1 size={20} /> Payment method </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  )
}

ProfileMenu.propTypes = {
  success: PropTypes.any,
  t: PropTypes.any
}

const mapStatetoProps = state => {
  const { error, success } = state.Profile
  return { error, success }
}

export default withRouter(
  connect(mapStatetoProps, {})(withTranslation()(ProfileMenu))
)
