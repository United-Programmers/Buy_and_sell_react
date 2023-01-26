import { Table, Pagination, Dropdown } from "react-bootstrap";
import {Link} from 'react-router-dom';
import data from '../../components/data';
import {Badge, Card} from 'reactstrap';
import { RiDeleteBin6Line } from 'react-icons/ri';
import {FaEllipsisH} from 'react-icons/fa';
import React, { Fragment, useRef, useState } from "react";
import { style } from "@mui/system";
import { DropdownMenu, DropdownToggle } from "reactstrap/es";
import { AiOutlineEye } from "react-icons/ai";
// import {AiOutlineMenuUnfold} from 'react-icons/ai';



export const DelieveredTable = () =>{
    const sort = 4;
    const deliveredPagination = Array(Math.ceil(data.DeliveryTable.data.length / sort )).fill().map((_, i) => i + 1)
    const activePage = useRef(0);
    const deliverData = useRef(
        data.DeliveryTable.data.slice(
            activePage.current * sort, 
            (activePage.current + 1) * sort
        )
    );

    const [demo, setDemo] = useState();

    const onClick = (i) => {
        activePage.current = i;

        deliverData.current = data.profileTable.data.slice(
            activePage.current * sort,
            (activePage.current + 1) * sort
        );
        setDemo(
            data.profileTable.data.slice(
                activePage.current * sort,
                (activePage.current + 1) * sort
            )
        );
    };

   

    return (
        <section className="col-12">
            <Card className="p-4">
                <h4 className="table-card-title "> Delivered Products </h4>

                <div>
                    <Table responsive hover className="w-100">
                        <div id="example_wrapper" className="dataTables_wrapper">
                            <table id="example" className="display w-100 dataTable">
                                <thead>
                                    <tr role="row">{data.DeliveryTable.columns.map((data, index)=>(
                                        <th className="table_header px-3" key={index}>{data}</th>
                                    ))}</tr>
                                </thead>

                                <tbody>

                                    {deliverData.current.map((data, index) => ( //map through the array values
                                        <tr key={index}> 
                                            
                                                <>
                                                    {data.map((da, i)=>(
                                                        <Fragment key={i}>
                                                            <td className="table__content_data">
                                                                {i === 0 ? (
                                                                    <img
                                                                        className="rounded-circle avatar-sm border"
                                                                        width='15'
                                                                        src={da}
                                                                        alt=""
                                                                    />
                                                                ): (
                                                                    <Fragment>
                                                                        <div className="p-3">
                                                                            {da}
                                                                            {i === 6 && (
                                                                                <div className="d-flex">
                                                                                    
                                                                                    <Dropdown>
                                                                                        <Dropdown.Toggle variant="" className="bg-secondary">
                                                                                            <Badge to="#" className=" btn-transparent table__btn   btn-xs  p-2">
                                                                                                <FaEllipsisH className=" text-dark " size={14}/>
                                                                                            </Badge>
                                                                                        </Dropdown.Toggle>

                                                                                        <Dropdown.Menu style={{margin: '0 0 0 -80px'}}>
                                                                                
                                                                                            <Dropdown.Item>
                                                                                                <li>
                                                                                                    <a href="#">View More </a>{" "}
                                                                                                    <AiOutlineEye size={14} />
                                                                                                </li> 
                                                                                            
                                                                                            </Dropdown.Item>                                                                                                                                                                            
                                                                                            <Dropdown.Item><li><a href="#">Delete</a>{" "}
                                                                                            
                                                                                                <RiDeleteBin6Line size={14} />
                                                                                            </li></Dropdown.Item>                                                                                                                                                                            
                                                                                        </Dropdown.Menu>
                                                                                    </Dropdown>
                                                                                                                                
                                                                                </div>

                                                                            )}

                                                                            
                                                                        </div>
                                                                    </Fragment>
                                                                )}
                                                            </td>
                                                        </Fragment>
                                                    ))}
                                                
                                                </>
                                            
                                            
                                        </tr>
                                    ))}
                                    
                                </tbody>
                            </table>

                            <div className="d-sm-flex text-center justify-content-between align-items-center mt-3 footer__border">

                                <div className="dataTables_info">
                                    Showing {activePage.current * sort + 1} to {data.DeliveryTable.data.length < (activePage.current + 1) * sort ? data.DeliveryTable.data.length
                                        : (activePage.current + 1) * sort}
                                    of {data.DeliveryTable.data.length} entries
                                </div>

                                <div className="dataTables_paginate paging_simple_numbers">
                                    <Pagination className="pagination-primary pagination-box" size="lg">
                                        <li className="btn btn-outline-primary"
                                            style={{ borderRadius: "4px" }}
                                            onClick={() =>
                                                activePage.current > 0 &&
                                                onClick(activePage.current - 1)
                                            }
                                        >
                                            <Link className="paginate_button previous disabled" style={{ padding: "10px 20px",
                                            }} to="#">
                                                Prev
                                            </Link>
                                        </li>

                                        <span>
                                            {deliveredPagination.map((number, i) => (
                                                <Link
                                                    key={i}
                                                    // to="/table-datatable-basic"
                                                    className={`paginate_button  ${activePage.current === i
                                                        ? "current"
                                                        : "not_current"
                                                        }`}
                                                    onClick={() => onClick(i)}
                                                >
                                                    {number}
                                                </Link>
                                            ))}
                                        </span>

                                        <li
                                            className="btn btn-outline-primary"
                                            onClick={() =>
                                                activePage.current + 1 <
                                                deliveredPagination.length &&
                                                onClick(activePage.current + 1)
                                            }
                                        >
                                            <Link className="paginate_button next" to="#" style={{ padding: "10px 20px" }}>
                                                Next
                                            </Link>
                                        </li>
                                    </Pagination>
                                </div>

                            </div>
                        </div>
                        
                    </Table>
                </div>
            </Card>
            {}
        </section>
    )
}

