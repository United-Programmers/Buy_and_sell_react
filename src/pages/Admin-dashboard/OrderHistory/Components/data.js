import pic1 from "../../../../assets/images/product/orderHistory1.svg"
import pic2 from "../../../../assets/images/product/orderHistory2.svg"
import pic3 from "../../../../assets/images/product/orderHistory3.svg"

const orderTable = {
    data: [
        [
            pic1,
            "John",
            "Doe",
            "2022-11-25",
            "chad@gmail.com",
            "Active",
            "Suspend",
            "",
            
        ],
        [
            pic3,
            "John",
            "Doe",
            "2022-11-25",
            "john@gmail.com",
            "Active",
            "Suspend",
            "",
        ],
        [
            pic2,
            "John",
            "Doe",
            "2022-11-25",
            "xxxxxxxx",
            "Active",
            "Suspend",
            "",
        ],
        
    ],
    columns: [
        "Pic",
        "Product Name",
        "Color",
        "Size",
        "Status",
        "Quantity",
        "Price",
        "Deliver Type",
        "Total Price",
        "Date",
        "Action",
    ],
};


const feeTable = {
    data: [
        [
            "01",
            "Paul Byrd",
            "#3059",
            "Library",
            "Cash",
            "Paid",
            "2010/06/09",
            "$725,000",
        ],
        [
            "02",
            "Gloria Little",
            "#1721",
            "Library",
            "Cash",
            "Paid",
            "2009/04/10",
            "$237,500",
        ],
        [
            "03",
            "Bradley Greer",
            "#2558",
            "Library",
            "Cash",
            "Paid",
            "2012/10/13",
            "$132,000",
        ],
        [
            "04",
            "Dai Rios",
            "#2290",
            "Library",
            "Cash",
            "Paid",
            "2012/09/26",
            "$217,500",
        ],
        [
            "05",
            "Jenette Caldwell",
            "#1937",
            "Library",
            "Cash",
            "Paid",
            "2011/09/03",
            "$345,000",
        ],
        [
            "06",
            "Yuri Berry",
            "#6154",
            "Library",
            "Cash",
            "Paid",
            "2009/06/25",
            "$675,000",
        ],
        [
            "07",
            "Caesar Vance",
            "#8330",
            "Library",
            "Cash",
            "Paid",
            "2011/12/12",
            "$106,450",
        ],
        [
            "08",
            "Doris Wilder",
            "#3023",
            "Tuition",
            "Cheque",
            "Unpaid",
            "2010/09/20",
            "$85,600",
        ],
        [
            "09",
            "Angelica Ramos",
            "#5797",
            "Library",
            "Cash",
            "Paid",
            "2009/10/09",
            "$1,200,000",
        ],
        [
            "10",
            "Gavin Joyce",
            "#8822",
            "Annual",
            "Credit Card",
            "Panding",
            "2010/12/22",
            "$92,575",
        ],
    ],
    columns: [
        "Roll No",
        "Student Name",
        "Invoice number",
        "Fees Type ",
        "Payment Type ",
        "Status",
        "Date",
        "Amount",
    ],
};


const data = {
    orderTable,
    feeTable
};

export default data;