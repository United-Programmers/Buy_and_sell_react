import { AiFillStar } from "react-icons/ai"
import { FaRegUserCircle } from "react-icons/fa"

function ReviewsIcon() {
  return (
    <span className="d-flex">
      <AiFillStar size={16} className="text-warning" />
      <AiFillStar size={16} className="text-warning" />
      <AiFillStar size={16} className="text-warning" />
      <AiFillStar size={16} className="text-warning" />
    </span>
  )
}

export const DataCards = [
  {
    title: "Earnings",
    value: "R 30 400",
    icon: <FaRegUserCircle />,
    percentage: "4.3%",
    date: "last month",
  },
  {
    title: "Balance",
    value: "R 20 400",
    icon: <FaRegUserCircle />,
    percentage: "4.3%",
    date: "12/01/23",
  },
  {
    title: "Orders Delivered",
    value: "400",
    icon: <FaRegUserCircle />,
    percentage: "4.3%",
    date: "04/01/22",
  },
  {
    title: "Orders Cancelled",
    value: "10",
    icon: <FaRegUserCircle />,
    percentage: "4.3%",
    date: "15/01/22",
  },
  {
    title: "Distance Covered",
    value: "1780Km",
    icon: <FaRegUserCircle />,
    percentage: "4.3%",
    date: "11/01/22",
  },
  {
    title: "Customer Reviews",
    value: "Reviews  (16)",
    icon: <ReviewsIcon />,
    date: "01/01/22",
  },
]
