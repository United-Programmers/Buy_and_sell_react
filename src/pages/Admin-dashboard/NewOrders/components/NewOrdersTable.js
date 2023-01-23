import React, { Fragment, useState, useRef } from "react";
import { Table, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import data from "./data";
import { Badge, Card } from 'reactstrap';
import { AiOutlineEye } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdStarBorder } from "react-icons/md";

const   NewOrdersTable = () => {

    const sort = 4;
    let jobPagination = Array(Math.ceil(data.profileTable.data.length / sort)).fill().map((_, i) => i + 1);
    const activePag = useRef(0);

    const jobData = useRef(
        data.profileTable.data.slice(
            activePag.current * sort,
            (activePag.current + 1) * sort
        )
    );
    const [demo, setdemo] = useState();

    const onClick = (i) => {
        activePag.current = i;

        jobData.current = data.profileTable.data.slice(
            activePag.current * sort,
            (activePag.current + 1) * sort
        );
        setdemo(
            data.profileTable.data.slice(
                activePag.current * sort,
                (activePag.current + 1) * sort
            )
        );
    };

    return (
        <div className="col-12">
            <Card className="p-4">
                <h4 className="table-card-title "><span class="order-title"><MdStarBorder className="order-icon mb-2"/>New</span> Orders</h4>
                <div>
                    <Table responsive className="w-100">
                        <div id="example_wrapper" className="dataTables_wrapper">
                            <table id="example" className="display w-100 dataTable">

                                <thead>
                                    <tr role="row">  {data.profileTable.columns.map((d, i) => (<th className="table_header" key={i}>{d}</th>))} </tr>
                                </thead>

                                <tbody>
                                    {jobData.current.map((d, i) => (
                                        <tr key={i}>
                                            {d.map((da, i) => (
                                                <Fragment key={i}>
                                                    <td className="table__content_data">
                                                        {i === 0 ? (
                                                            <img
                                                                className="rounded-circle avatar-sm rounded-avatar"
                                                                width="15"
                                                                src={da}
                                                                alt=""
                                                            />
                                                        ) : (
                                                            <Fragment>
                                                                <div >
                                                                    {da}
                                                                    {i === 8 && (
                                                                        <div className="d-flex">
                                                                            <Badge to="#" className="rounded-circle table__btn shadow btn-xs sharp me-1 btn__success p-2">
                                                                                <AiOutlineEye size={14} />
                                                                            </Badge>
                                                                            <Badge to="#" className="rounded-circle btn-danger table__btn shadow btn-xs sharp p-2"
                                                                            >
                                                                                <RiDeleteBin6Line size={14} />
                                                                            </Badge>
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
                                    Showing {activePag.current * sort + 1} to {data.profileTable.data.length < (activePag.current + 1) * sort ? data.profileTable.data.length
                                        : (activePag.current + 1) * sort}
                                     of {data.profileTable.data.length} entries
                                </div>

                                <div className="dataTables_paginate paging_simple_numbers">
                                    <Pagination className="pagination-primary pagination-box" size="lg">
                                        <li className="btn btn-outline-primary"
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

export default NewOrdersTable;
