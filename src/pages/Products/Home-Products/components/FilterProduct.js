import React, { useEffect, useState } from "react"
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap"
import { Link } from "react-router-dom"
import { BiUserPlus, BiCar } from "react-icons/bi";
import { GrUserAdmin } from "react-icons/gr";
import { HiOutlineUserGroup } from "react-icons/hi";
import Products from './../../../Vendors/Vendors-shops/Products';
import { MdProductionQuantityLimits } from "react-icons/md";
import { BsFilter } from "react-icons/bs";

const FilterProduct = () => {

    const [selectedLang, setSelectedLang] = useState("")
    const [menu, setMenu] = useState(false)
    const toggle = () => { setMenu(!menu) }

    return (
        <div>
            <Dropdown isOpen={menu} toggle={toggle} className="d-none d-md-block ms-2">
                <DropdownToggle className="btn header-item waves-effect" tag="button">
                    Filter <BsFilter size={28} />
                </DropdownToggle>

                <DropdownMenu className="language-switch dropdown-menu-end">
                    <DropdownItem tag="a"> <Link to="/vendors-list" className="text-dark">
                        <MdProductionQuantityLimits size={18} /> New Products </Link>
                    </DropdownItem>
                    <div className="dropdown-divider" />
                    <DropdownItem tag="a"> <Link to="/#" className="text-dark">
                        <MdProductionQuantityLimits size={18} /> Best Products </Link> </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default FilterProduct
