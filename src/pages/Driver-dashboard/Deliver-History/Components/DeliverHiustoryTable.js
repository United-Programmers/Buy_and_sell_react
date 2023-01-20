import React, { Fragment, useState, useRef } from "react"
import { Table, Pagination } from "react-bootstrap"
import { Link } from "react-router-dom"
import profileTable from "./data"
import { Badge, Card } from "reactstrap"
import { AiOutlineEye } from "react-icons/ai"
import { RiDeleteBin6Line } from "react-icons/ri"
import { FcApproval, FcCancel } from "react-icons/fc"

function DeliverHiustoryTable() {
  const sort = 4
  let jobPagination = Array(Math.ceil(profileTable.data.length / sort))
    .fill()
    .map((_, i) => i + 1)
  const activePag = useRef(0)

  const jobData = useRef(
    profileTable.data.slice(
      activePag.current * sort,
      (activePag.current + 1) * sort
    )
  )
  const [demo, setdemo] = useState()

  const onClick = i => {
    activePag.current = i

    jobData.current = profileTable.data.slice(
      activePag.current * sort,
      (activePag.current + 1) * sort
    )
    setdemo(
      profileTable.data.slice(
        activePag.current * sort,
        (activePag.current + 1) * sort
      )
    )
  }

  return (
    <div className="col-12">
      <Card className="p-4">
        <h4 className="table-card-title">Delivery History</h4>
        <div>
          <Table responsive className="w-100">
            <div id="example_wrapper" className="dataTables_wrapper">
              <table id="example" className="display w-100 dataTable">
                <thead>
                  <tr role="row">
                    {" "}
                    {profileTable.columns.map((d, i) => (
                      <th className="table_header" key={i}>
                        {d}
                      </th>
                    ))}{" "}
                  </tr>
                </thead>

                <tbody>
                  {jobData.current.map((d, i) => (
                    <tr key={i}>
                      {d.map((da, i) => (
                        <Fragment key={i}>
                          <td className="table__content_data">
                            {i === 0 ? (
                              <img
                                className="rounded-circle avatar-sm"
                                width="35"
                                src={da}
                                alt=""
                              />
                            ) : (
                              <Fragment>
                                <div>
                                  {da}
                                  {i === 6 && <div> </div>}
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
                  Showing {activePag.current * sort + 1} to{" "}
                  {profileTable.data.length < (activePag.current + 1) * sort
                    ? profileTable.data.length
                    : (activePag.current + 1) * sort}
                  of {profileTable.data.length} entries
                </div>

                <div className="dataTables_paginate paging_simple_numbers">
                  <Pagination
                    className="pagination-primary pagination-box"
                    size="lg"
                  >
                    <li
                      className="btn btn-outline-primary"
                      style={{ borderRadius: "4px" }}
                      onClick={() =>
                        activePag.current > 0 && onClick(activePag.current - 1)
                      }
                    >
                      <Link
                        className="paginate_button previous disabled"
                        style={{ padding: "10px 20px" }}
                        to="#"
                      >
                        Prev
                      </Link>
                    </li>

                    <span>
                      {jobPagination.map((number, i) => (
                        <Link
                          key={i}
                          // to="/table-datatable-basic"
                          className={`paginate_button  ${
                            activePag.current === i ? "current" : "not_current"
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
                        activePag.current + 1 < jobPagination.length &&
                        onClick(activePag.current + 1)
                      }
                    >
                      <Link
                        className="paginate_button next"
                        to="#"
                        style={{ padding: "10px 20px" }}
                      >
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
  )
}

export default DeliverHiustoryTable
