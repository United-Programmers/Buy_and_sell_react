import React, { Fragment, useState, useRef } from "react";
import { Table, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import data from "../Components/data";
import { Badge, Card } from 'reactstrap';

const OrderHistoryTable = () => {
    const sort = 3;
    const activePag = useRef(0);
    const orderData = useRef(
        data.orderTable.data.slice(
            activePag.current * sort,
            (activePag.current + 1) * sort
        )
    );

  return (
    <div className="col-12">
        <Card className="p-4">
            <h4>Ordering History</h4>
            <div>
                <Table responsive className="w-100">
                    <div id="example_wrapper" className="dataTables_wrapper">
                        <table id="example" className="display w-100 dataTable">
                            <thead>
                                <tr role="row">{data.orderTable.columns.map((d, i) => (<th className="table_header order__heading" key={i}>{d}</th>))}</tr>
                            </thead>

                            <tbody>
                            {orderData.current.map((d, i) => (
                                        <tr key={i}>
                                            {d.map((da, i) => (
                                                <Fragment key={i}>
                                                    <td className="table__content_data">
                                                        {i === 0 ? (
                                                            <img
                                                                className=" avatar-sm"
                                                                width="35"
                                                                src={da}
                                                                alt=""
                                                            />
                                                        ) : (
                                                            <Fragment>
                                                                <div >
                                                                
                                                                    {i === 11 && (
                                                                        <div>
                                                                            <Badge to="#" className="rounded-circle table__btn shadow btn-xs sharp me-1 btn__view p-2">
                                                                                ...
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
                    </div>
                </Table>
            </div>
        </Card>
    </div>
  )
}

export default OrderHistoryTable