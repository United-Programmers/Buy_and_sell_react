import React, { Fragment, useState, useRef } from "react";
import { Table, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import data from "../Components/data";
import { Badge, Card } from 'reactstrap';

const OrderHistoryTable = () => {
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
                        </table>
                    </div>
                </Table>
            </div>
        </Card>
    </div>
  )
}

export default OrderHistoryTable