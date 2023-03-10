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
import { FaUserFriends } from 'react-icons/fa';
import { AiOutlineMessage } from 'react-icons/ai';
import { HiOutlineUsers } from 'react-icons/hi';

const ProfileMenu = () => {
  const [menu, setMenu] = useState(false)

  return (
    <React.Fragment>
      <Dropdown isOpen={menu} toggle={() => setMenu(!menu)} className="d-inline-block">

        <DropdownToggle className="btn header-item waves-effect px-5" id="page-header-user-dropdown" tag="button">
          <img className="rounded-circle header-profile-user" src={user1} alt="user" />
          <span className="mdi mdi-chevron-down mx-1"> Joseph </span>
        </DropdownToggle>

        <DropdownMenu className="dropdown-menu-end">
          <DropdownItem tag="a"> <Link to="/account" className="text-dark">  <BiUserCircle size={20} /> Buyer Account </Link> </DropdownItem>
          <div className="dropdown-divider" />
          <DropdownItem tag="a"> <Link to="/vendor-dashboard" className="text-dark">  <BiUserCircle size={20} /> Vendor Account </Link> </DropdownItem>
          <div className="dropdown-divider" />
          <DropdownItem tag="a"> <Link to="/driver-dashboard" className="text-dark">  <BiUserCircle size={20} /> Driver Account </Link> </DropdownItem>
          <div className="dropdown-divider" />
          <DropdownItem tag="a"> <Link to="/admin-dashboard" className="text-dark">  <BiUserCircle size={20} /> Admin </Link> </DropdownItem>
          {/* <div className="dropdown-divider" />
          <DropdownItem tag="a"> <Link to="/user-orders" className="text-dark">  <SlBasketLoaded size={20} /> Orders </Link> </DropdownItem> */}
          {/* <div className="dropdown-divider" />
          <DropdownItem tag="a"> <Link to="/wishlist" className="text-dark"> <MdFavoriteBorder size={20} /> Wishlist </Link> </DropdownItem> */}
          <div className="dropdown-divider" />
          <DropdownItem tag="a"> <Link to="/vendors-list" className="text-dark"> <HiOutlineUsers size={20} /> Vendors </Link> </DropdownItem>
          {/* <div className="dropdown-divider" />
          <DropdownItem tag="a"> <Link to="/user-message" className="text-dark"> <AiOutlineMessage size={20} /> Message </Link> </DropdownItem> */}
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
