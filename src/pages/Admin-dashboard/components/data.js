import pic1 from "../../../assets/images/product/img-1.png";
import pic2 from "../../../assets/images/product/img-2.png";
import pic3 from "../../../assets/images/product/img-3.png";
import pic4 from '../../../assets/images/product/img-11.jpg';
import pic5 from '../../../assets/images/product/img-12.webp';
import pic6 from '../../../assets/images/product/img-4.png';


const profileTable = {
    data: [
        [
            pic1,
            "Dai Rios",
            "R 200",
            "65",
            "sm",
            "male",
            "",
        ],
        [
            pic3,
            "Jenette Caldwell",
            "R 200",
            "55",
            "xxl",
            "male",
            "",
        ],
        [
            pic2,
            "Yuri Berry",
            "R 150",
            "45",
            "sm",
            "female",
            "",
        ],
        [
            pic1,
            "Caesar Vance",
            "R 200",
            "20",
            "md",
            "other",
            "",
        ],
        [
            pic3,
            "Doris Wilder",
            "R 330",
            "33",
            "lg",
            "female",
            "",
        ],
        [
            pic1,
            "Angelica Ramos",
            "R 200",
            "33",
            "sm",
            "male",
            "",
        ],
        [
            pic1,
            "Gavin Joyce",
            "R 150",
            "33",
            "md",
            "other",
            "",
        ],
    ],
    columns: [
        "pic",
        "Product Name",
        "Price",
        "stock",
        "Size",
        "Gender",
        "actions",
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




const DeliveryTable = {
    data: [
        [
            pic4,
            'Macbook M1 Max',
            '2023-05-18',
            '2023-05-21',
            '12:00pm',
            profileTable.data[0][1],
            ''

        ],

        [
            pic5,
            'Black Hoodie',
            '2023-05-18',
            '2023-05-21',
            '12:00pm',
            profileTable.data[1][1],
            '',

        ],

        [
            pic6,
            'White T-Shirt',
            '2023-05-18',
            '2023-05-21',
            '12:00pm',
            profileTable.data[2][1],
            '',
        ]

    ],

    columns: [
        'Pic',
        'Product Name',
        'Assign Date',
        'Delivery Date',
        'Time',
        'Buyer',
        'Action',
        

    ]
}


const data = {
    profileTable,
    feeTable,
    DeliveryTable
};

export default data;