import React, { Fragment, useState, useRef } from "react";
import { Table, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import items from "../components/items";
import { Badge, Card } from 'reactstrap';
import { AiOutlineEye } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdStarBorder } from 'react-icons/md';

const ProfileDatatable = () => {

    const sort = 4;
    let jobPagination = Array(Math.ceil(items.profileTable.item.length / sort)).fill().map((_, i) => i + 1);
    const activePag = useRef(0);
    console.log(jobPagination)

    const jobData = useRef(
        items.profileTable.item.slice(
            activePag.current * sort,
            (activePag.current + 1) * sort
        )
    );
    const [demo, setdemo] = useState();

    const onClick = (i) => {
        activePag.current = i;

        jobData.current = items.profileTable.item.slice(
            activePag.current * sort,
            (activePag.current + 1) * sort
        );
        setdemo(
            items.profileTable.item.slice(
                activePag.current * sort,
                (activePag.current + 1) * sort
            )
        );
    };

    return (
        <div className="col-12">
            <Card className="p-4">
                <h4 className="table-card-title"><span className="table-icon"><MdStarBorder/></span> Order List</h4>
                <div>
                    <Table responsive className="table-container w-100">
                        <div id="example_wrapper" className="dataTables_wrapper">
                            <table id="example" className="display w-100 dataTable">

                                <thead>
                                    <tr role="row">  {items.profileTable.columns.map((d, i) => (<th className="table_header" key={i}>{d}</th>))} </tr>
                                </thead>

                                <tbody>
                                    {jobData.current.map((d, i) => (
                                        <tr key={i}>
                                            {d.map((da, i) => (
                                                <Fragment key={i}>
                                                    <td className="table__content_data">
                                                        {i === 0 ? (
                                                            <img
                                                                className="rounded-circle avatar-sm avatar-image"
                                                                width="35"
                                                                src={da}
                                                                alt=""
                                                            />
                                                        ) : (
                                                            <Fragment>
                                                                <div >
                                                                    {da}
                                                                    {i === 6 && (
                                                                        <div className="d-flex">
                                                                           
                                                                            
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </Fragment>
                                                        )}
                                                    </td>
                                                </Fragment>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <div className="d-sm-flex text-center justify-content-between align-items-center mt-3 footer__border">

                                <div className="dataTables_info">
                                    Showing {activePag.current * sort + 1} to {items.profileTable.item.length < (activePag.current + 1) * sort ? items.profileTable.item.length
                                        : (activePag.current + 1) * sort}
                                    of {items.profileTable.item.length} entries
                                </div>

                                <div className="dataTables_paginate paging_simple_numbers">
                                    <Pagination className="pagination-primary pagination-box" size="lg">
                                        <li className="btn btn-outline-primary btn-next"
                                            style={{ borderRadius: "4px" }}
                                            onClick={() =>
                                                activePag.current > 0 &&
                                                onClick(activePag.current - 1)
                                            }
                                        >
                                            <Link className="paginate_button previous disabled" style={{ padding: "10px 20px" }} to="#">
                                                Prev
                                            </Link>
                                        </li>

                                        <span>
                                            {jobPagination.map((number, i) => (
                                                <Link
                                                    key={i}
                                                    // to="/table-datatable-basic"
                                                    className={`paginate_button  ${activePag.current === i
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
                                                activePag.current + 1 <
                                                jobPagination.length &&
                                                onClick(activePag.current + 1)
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
        </div>
    );
};

export default ProfileDatatable;
