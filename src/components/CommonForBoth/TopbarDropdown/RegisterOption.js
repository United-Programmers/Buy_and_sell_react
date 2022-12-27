import React, { useEffect, useState } from "react"
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap"
import { Link } from "react-router-dom"
import { BiUserPlus, BiCar } from "react-icons/bi";
import { GrUserAdmin } from "react-icons/gr";

const RegisterOption = () => {

  const [selectedLang, setSelectedLang] = useState("")
  const [menu, setMenu] = useState(false)
  const toggle = () => { setMenu(!menu) }

  return (
    <div>
      <Dropdown isOpen={menu} toggle={toggle} className="d-none d-md-block ms-2">
        <DropdownToggle className="btn header-item waves-effect" tag="button">
          Register As <span className="mdi mdi-chevron-down"></span>
        </DropdownToggle>

        <DropdownMenu className="language-switch dropdown-menu-end">
          <DropdownItem tag="a"> <Link to="/user-register" className="text-dark"> <BiUserPlus size={20} /> Buyer </Link> </DropdownItem>
          <div className="dropdown-divider" />
          <DropdownItem tag="a"> <Link to="/sellers-register" className="text-dark"> <GrUserAdmin size={20} /> Seller </Link> </DropdownItem>
          <div className="dropdown-divider" />
          <DropdownItem tag="a"><Link to="/driver-register" className="text-dark"> <BiCar size={20} /> Driver </Link> </DropdownItem>

        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

export default RegisterOption
