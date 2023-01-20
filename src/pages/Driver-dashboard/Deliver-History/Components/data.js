import pic1 from "../../../../assets/images/product/img-1.png"
import pic2 from "../../../../assets/images/product/img-2.png"
import pic3 from "../../../../assets/images/product/img-3.png"

import { FcApproval, FcCancel } from "react-icons/fc"

const profileTable = {
  data: [
    [
      pic1,
      "Dai Rios",
      "#6599",
      "R 200",
      "07-01-23",
      "Doris Wilder",
      <FcCancel size={24} />,
    ],
    [
      pic3,
      "Jenette Caldwell",
      "#5465",
      "R 200",
      "07-01-23",
      "Doris Wilder",
      <FcApproval size={24} />,
    ],
    [
      pic2,
      "Yuri Berry",
      "#4592",
      "R 150",
      "07-01-23",
      "Doris Wilder",
      <FcApproval size={24} />,
    ],
    [
      pic1,
      "Caesar Vance",
      "#2380",
      "R 200",
      "07-01-23",
      "Doris Wilder",
      <FcApproval size={24} />,
    ],
    [
      pic3,
      "Doris Wilder",
      "#3393",
      "R 330",
      "07-01-23",
      "Doris Wilder",
      <FcApproval size={24} />,
    ],
    [
      pic1,
      "Angelica Ramos",
      "#3340",
      "R 200",
      "07-01-23",
      "Doris Wilder",
      <FcCancel size={24} />,
    ],
    [
      pic1,
      "Gavin Joyce",
      "#3253",
      "R 150",
      "07-01-23",
      "Doris Wilder",
      <FcApproval size={24} />,
    ],
  ],
  columns: [
    "pic",
    "Product Name",
    "Order Id",
    "Price",
    "Date",
    "Receiver",
    "Status",
  ],
}

export default profileTable
