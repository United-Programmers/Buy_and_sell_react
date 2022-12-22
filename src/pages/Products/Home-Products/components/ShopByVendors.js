import React, { useEffect, useState } from "react"
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap"
import { Link } from "react-router-dom"
import { BiUserPlus, BiCar } from "react-icons/bi";
import { GrUserAdmin } from "react-icons/gr";
import { HiOutlineUserGroup } from "react-icons/hi";

const ShopByVendors = () => {

    const [selectedLang, setSelectedLang] = useState("")
    const [menu, setMenu] = useState(false)
    const toggle = () => { setMenu(!menu) }

    return (
        <div>
            <Dropdown isOpen={menu} toggle={toggle} className="d-none d-md-block ms-2">
                <DropdownToggle className="btn header-item waves-effect" tag="button">
                    Shop by vendors <span className="mdi mdi-chevron-down"></span>
                </DropdownToggle>

                <DropdownMenu className="language-switch dropdown-menu-end">
                    <DropdownItem tag="a"> <Link to="/vendors-list" className="text-dark"> <HiOutlineUserGroup size={20} /> Vendors </Link>
                    </DropdownItem>
                    {/* <div className="dropdown-divider" />
                    <DropdownItem tag="a"> <Link to="/#" className="text-dark"> <GrUserAdmin size={20} /> Seller </Link> </DropdownItem> */}
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default ShopByVendors
