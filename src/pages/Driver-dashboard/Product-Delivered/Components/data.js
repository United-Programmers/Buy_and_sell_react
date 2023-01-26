import pic1 from "../../../../assets/images/product/img-1.png"
import pic2 from "../../../../assets/images/product/img-2.png"
import pic3 from "../../../../assets/images/product/img-3.png"
import { Badge, Card } from "reactstrap"
import { BiLike, BiDislike } from "react-icons/bi"

const AcceptOrder = () => {
  return (
    <div className="d-flex ms-3">
      <Badge
        to="#"
        className="rounded-circle table__btn shadow btn-xs sharp me-1 btn__view p-2"
      >
        <BiLike size={14} />
      </Badge>
      <Badge
        to="#"
        className="rounded-circle btn-danger table__btn shadow btn-xs sharp p-2"
      >
        <BiDislike size={14} />
      </Badge>
    </div>
  )
}

const profileTable = {
  data: [
    [
      pic1,
      "Dai Rios",
      "Saunders St, 2981",
      "07-01-23",
      "12-02-23",
      "Doris Wilder",
      <AcceptOrder />,
    ],
    [
      pic3,
      "Jenette Caldwell",
      "Saunders St, 2981",
      "07-01-23",
      "12-02-23",
      "Doris Wilder",
      <AcceptOrder />,
    ],
    [
      pic2,
      "Yuri Berry",
      "Saunders St, 2981",
      "07-01-23",
      "12-02-23",
      "Doris Wilder",
      <AcceptOrder />,
    ],
    [
      pic1,
      "Caesar Vance",
      "Saunders St, 2981",
      "07-01-23",
      "12-02-23",
      "Doris Wilder",
      <AcceptOrder />,
    ],
    [
      pic3,
      "Doris Wilder",
      "Saunders St, 2981",
      "07-01-23",
      "12-02-23",
      "Doris Wilder",
      <AcceptOrder />,
    ],
    [
      pic1,
      "Angelica Ramos",
      "Saunders St, 2981",
      "07-01-23",
      "12-02-23",
      "Doris Wilder",
      <AcceptOrder />,
    ],
    [
      pic1,
      "Gavin Joyce",
      "Saunders St, 2981",
      "07-01-23",
      "12-02-23",
      "Doris Wilder",
      <AcceptOrder />,
    ],
  ],
  columns: [
    "pic",
    "Product Name",
    "Address",
    "Collect By:",
    "Deliver By:",
    "Receiver",
    "Accept Order",
  ],
}

export default profileTable
