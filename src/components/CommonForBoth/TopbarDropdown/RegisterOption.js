import React, { useEffect, useState } from "react"
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap"
import {Link} from "react-router-dom"
import { BiUserPlus , BiCar} from "react-icons/bi";
import { GrUserAdmin} from "react-icons/gr";

const RegisterOption = () => {

  const [selectedLang, setSelectedLang] = useState("")
  const [menu, setMenu] = useState(false)
  const toggle = () => { setMenu(!menu)}

  return (
    <>
      <Dropdown isOpen={menu} toggle={toggle} className="d-none d-md-block ms-2">
        <DropdownToggle className="btn header-item waves-effect" tag="button">
          Register As <span className="mdi mdi-chevron-down"></span>
        </DropdownToggle>

        <DropdownMenu className="language-switch dropdown-menu-end">
        <DropdownItem tag="a" href="/#"> <BiUserPlus size={20} /> Buyer </DropdownItem>
          <div className="dropdown-divider" />
          <DropdownItem tag="a" href="/#"> <GrUserAdmin size={20} /> Seller </DropdownItem>
          <div className="dropdown-divider" />
          <DropdownItem tag="a" href="/#"> <BiCar size={20} /> Driver </DropdownItem>
         
        </DropdownMenu>
      </Dropdown>
    </>
  )
}

export default RegisterOption
