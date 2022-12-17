// import avatar2 from "../../assets/images/users/avatar-2.jpg"
// import avatar1 from "../../assets/images/users/avatar-1.jpg"
// import avatar4 from "../../assets/images/users/avatar-4.jpg"

const projects = [
  {
    id: 0,
    img: "img1",
    name: "Veltrix Dashboard UI",
    description:
      "Separate existence  For  music etc.",
    status: "Completed",
    color: "primary",
    dueDate: "12 Oct, 2019",
    commentsCount: 106,
    team: [
      {
        id: 1,
        img: "avatar2",
        name: "Daniel Canales",
        skills: [
          { id: 1, name: "Frontend" },
          { id: 2, name: "UI" },
        ],
      },
      {
        id: 2,
        img: "avatar1",
        name: "Jennifer Walker",
        skills: [{ id: 1, name: "UI/UX" }],
      },
      {
        id: 3,
        img: "Null",
        name: "Carl Mackay",
        skills: [{ id: 1, name: "Backend" }],
      },
      {
        id: 4,
        img: "avatar4",
        name: "Janice Cole",
        skills: [
          { id: 1, name: "Frontend" },
          { id: 2, name: "UI" },
        ],
      },
      {
        id: 5,
        img: "Null",
        name: "Tony Brafford",
        skills: [{ id: 1, name: "Backend" }],
      },
    ],
    startDate: "08 Sept, 2019",
    projectDetails: {
      description:
        "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,",
      points: [
        "To achieve this, it would be necessary",
        "Separate existence is a myth.",
        "If several languages coalesce",
      ],
    },
    files: [
      { name: "Veltrix Landing.Zip", size: "3.25 MB", link: "#" },
      { name: "Veltrix Admin.Zip", size: "3.15 MB", link: "#" },
      { name: "Veltrix Logo.Zip", size: "2.02 MB", link: "#" },
      { name: "Veltrix admin.Zip", size: "2.25 MB", link: "#" },
    ],
    comments: [
      {
        id: 1,
        username: "David Lambert",
        userImg: "avatar2",
        comment: "Separate existence is a myth.",
      },
      {
        id: 2,
        username: "Steve Foster",
        userImg: "avatar3",
        comment: "@Henry To an English person it will like simplified",
        reply: {
          username: "Jeffrey Walker",
          comment: "as a skeptical Cambridge friend",
        },
      },
      {
        id: 3,
        username: "Steven Carlson",
        comment: " Separate existence is a myth.",
      },
    ],
  },
  {
    id: 1,
    img: "img1",
    name: "New admin Design",
    description: "It will be as simple as Occidental",
    status: "Completed",
    color: "primary",
    dueDate: "15 Oct, 19",
    commentsCount: 214,
    team: [
      { id: 1, img: "avatar2", name: "Daniel Candles" },
      { id: 2, img: "avatar1", name: "Jennifer Walker" },
    ],
    startDate: "08 Sept, 2019",
    projectDetails: {
      description:
        "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,",
      points: [
        "To achieve this, it would be necessary",
        "Separate existence is a myth.",
        "If several languages coalesce",
      ],
    },
    files: [
      { name: "Veltrix Landing.Zip", size: "3.25 MB", link: "#" },
      { name: "Veltrix Admin.Zip", size: "3.15 MB", link: "#" },
      { name: "Veltrix Logo.Zip", size: "2.02 MB", link: "#" },
      { name: "Veltrix admin.Zip", size: "2.25 MB", link: "#" },
    ],
    comments: [
      {
        id: 1,
        username: "David Lambert",
        userImg: "avatar2",
        comment: "Separate existence is a myth.",
      },
      {
        id: 2,
        username: "Steve Foster",
        userImg: "avatar3",
        comment: "@Henry To an English person it will like simplified",
        reply: {
          username: "Jeffrey Walker",
          comment: "as a skeptical Cambridge friend",
        },
      },
      {
        id: 3,
        username: "Steven Carlson",
        comment: " Separate existence is a myth.",
      },
    ],
  },
  {
    id: 2,
    img: "img2",
    name: "Brand logo design",
    description: "To achieve it would be necessary",
    status: "Pending",
    color: "warning",
    dueDate: "22 Oct, 19",
    commentsCount: 183,
    team: [{ id: 1, img: "avatar3", name: "Kenneth Johnson" }],
    startDate: "08 Sept, 2019",
    projectDetails: {
      description:
        "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,",
      points: [
        "To achieve this, it would be necessary",
        "Separate existence is a myth.",
        "If several languages coalesce",
      ],
    },
    files: [
      { name: "Veltrix Landing.Zip", size: "3.25 MB", link: "#" },
      { name: "Veltrix Admin.Zip", size: "3.15 MB", link: "#" },
      { name: "Veltrix Logo.Zip", size: "2.02 MB", link: "#" },
      { name: "Veltrix admin.Zip", size: "2.25 MB", link: "#" },
    ],
    comments: [
      {
        id: 1,
        username: "David Lambert",
        userImg: "avatar2",
        comment: "Separate existence is a myth.",
      },
      {
        id: 2,
        username: "Steve Foster",
        userImg: "avatar3",
        comment: "@Henry To an English person it will like simplified",
        reply: {
          username: "Jeffrey Walker",
          comment: "as a skeptical Cambridge friend",
        },
      },
      {
        id: 3,
        username: "Steven Carlson",
        comment: " Separate existence is a myth.",
      },
    ],
  },
  {
    id: 3,
    img: "img3",
    name: "New Landing Design",
    description: "For science, music, sport, etc",
    status: "Delay",
    color: "danger",
    dueDate: "13 Oct, 19",
    commentsCount: 175,
    team: [
      { id: 1, img: "avatar2", name: "Kenneth Johnson" },
      { id: 2, img: "Null", name: "Andy Miller", color: "primary" },
      { id: 3, img: "avatar2", name: "Daniel Candles" },
    ],
    startDate: "08 Sept, 2019",
    projectDetails: {
      description:
        "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,",
      points: [
        "To achieve this, it would be necessary",
        "Separate existence is a myth.",
        "If several languages coalesce",
      ],
    },
    files: [
      { name: "Veltrix Landing.Zip", size: "3.25 MB", link: "#" },
      { name: "Veltrix Admin.Zip", size: "3.15 MB", link: "#" },
      { name: "Veltrix Logo.Zip", size: "2.02 MB", link: "#" },
      { name: "Veltrix admin.Zip", size: "2.25 MB", link: "#" },
    ],
    comments: [
      {
        id: 1,
        username: "David Lambert",
        userImg: "avatar2",
        comment: "Separate existence is a myth.",
      },
      {
        id: 2,
        username: "Steve Foster",
        userImg: "avatar3",
        comment: "@Henry To an English person it will like simplified",
        reply: {
          username: "Jeffrey Walker",
          comment: "as a skeptical Cambridge friend",
        },
      },
      {
        id: 3,
        username: "Steven Carlson",
        comment: " Separate existence is a myth.",
      },
    ],
  },
  {
    id: 4,
    img: "img4",
    name: "Redesign - Landing page",
    description: "If several languages coalesce",
    status: "Completed",
    color: "primary",
    dueDate: "14 Oct, 19",
    commentsCount: 202,
    team: [
      { id: 1, img: "avatar3", name: "Paul Miller" },
      { id: 2, img: "Null", name: "David Conyears", color: "success" },
    ],
    startDate: "08 Sept, 2019",
    projectDetails: {
      description:
        "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,",
      points: [
        "To achieve this, it would be necessary",
        "Separate existence is a myth.",
        "If several languages coalesce",
      ],
    },
    files: [
      { name: "Veltrix Landing.Zip", size: "3.25 MB", link: "#" },
      { name: "Veltrix Admin.Zip", size: "3.15 MB", link: "#" },
      { name: "Veltrix Logo.Zip", size: "2.02 MB", link: "#" },
      { name: "Veltrix admin.Zip", size: "2.25 MB", link: "#" },
    ],
    comments: [
      {
        id: 1,
        username: "David Lambert",
        userImg: "avatar2",
        comment: "Separate existence is a myth.",
      },
      {
        id: 2,
        username: "Steve Foster",
        userImg: "avatar3",
        comment: "@Henry To an English person it will like simplified",
        reply: {
          username: "Jeffrey Walker",
          comment: "as a skeptical Cambridge friend",
        },
      },
      {
        id: 3,
        username: "Steven Carlson",
        comment: " Separate existence is a myth.",
      },
    ],
  },
  {
    id: 5,
    img: "img5",
    name: "Veltrix Dashboard UI",
    description: "Separate existence is a myth",
    status: "Completed",
    color: "primary",
    dueDate: "13 Oct, 19",
    commentsCount: 194,
    team: [
      { id: 1, img: "avatar3", name: "Steven Jenkins" },
      { id: 2, img: "avatar2", name: "Ruby Clinton" },
    ],
    startDate: "08 Sept, 2019",
    projectDetails: {
      description:
        "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,",
      points: [
        "To achieve this, it would be necessary",
        "Separate existence is a myth.",
        "If several languages coalesce",
      ],
    },
    files: [
      { name: "Veltrix Landing.Zip", size: "3.25 MB", link: "#" },
      { name: "Veltrix Admin.Zip", size: "3.15 MB", link: "#" },
      { name: "Veltrix Logo.Zip", size: "2.02 MB", link: "#" },
      { name: "Veltrix admin.Zip", size: "2.25 MB", link: "#" },
    ],
    comments: [
      {
        id: 1,
        username: "David Lambert",
        userImg: "avatar2",
        comment: "Separate existence is a myth.",
      },
      {
        id: 2,
        username: "Steve Foster",
        userImg: "avatar3",
        comment: "@Henry To an English person it will like simplified",
        reply: {
          username: "Jeffrey Walker",
          comment: "as a skeptical Cambridge friend",
        },
      },
      {
        id: 3,
        username: "Steven Carlson",
        comment: " Separate existence is a myth.",
      },
    ],
  },
  {
    id: 6,
    img: "img6",
    name: "Blog Template UI",
    description: "For science, music, sport, etc",
    status: "Pending",
    color: "warning",
    dueDate: "24 Oct, 19",
    commentsCount: 222,
    team: [{ id: 1, img: "Null", name: "Ken Dorsy", color: "danger" }],
    startDate: "08 Sept, 2019",
    projectDetails: {
      description:
        "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,",
      points: [
        "To achieve this, it would be necessary",
        "Separate existence is a myth.",
        "If several languages coalesce",
      ],
    },
    files: [
      { name: "Veltrix Landing.Zip", size: "3.25 MB", link: "#" },
      { name: "Veltrix Admin.Zip", size: "3.15 MB", link: "#" },
      { name: "Veltrix Logo.Zip", size: "2.02 MB", link: "#" },
      { name: "Veltrix admin.Zip", size: "2.25 MB", link: "#" },
    ],
    comments: [
      {
        id: 1,
        username: "David Lambert",
        userImg: "avatar2",
        comment: "Separate existence is a myth.",
      },
      {
        id: 2,
        username: "Steve Foster",
        userImg: "avatar3",
        comment: "@Henry To an English person it will like simplified",
        reply: {
          username: "Jeffrey Walker",
          comment: "as a skeptical Cambridge friend",
        },
      },
      {
        id: 3,
        username: "Steven Carlson",
        comment: " Separate existence is a myth.",
      },
    ],
  },
  {
    id: 7,
    img: "img2",
    name: "Multipurpose Landing",
    description: "It will be as simple as Occidental",
    status: "Delay",
    color: "danger",
    dueDate: "01 Oct, 19",
    commentsCount: 214,
    team: [{ id: 1, img: "avatar1", name: "Partica Harrison" }],
  },
  {
    id: 8,
    img: "img3",
    name: "App Landing UI",
    description: "It will be as simple as Occidental",
    status: "Delay",
    color: "danger",
    dueDate: "22 Oct, 19",
    commentsCount: 185,
    team: [
      { id: 1, img: "Null", name: "David Conyears", color: "primary" },
      { id: 2, img: "Null", name: "Harold Mendez", color: "primary" },
      { id: 3, img: "avatar1", name: "Partica Harrison" },
    ],
    startDate: "08 Sept, 2019",
    projectDetails: {
      description:
        "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,",
      points: [
        "To achieve this, it would be necessary",
        "Separate existence is a myth.",
        "If several languages coalesce",
      ],
    },
    files: [
      { name: "Veltrix Landing.Zip", size: "3.25 MB", link: "#" },
      { name: "Veltrix Admin.Zip", size: "3.15 MB", link: "#" },
      { name: "Veltrix Logo.Zip", size: "2.02 MB", link: "#" },
      { name: "Veltrix admin.Zip", size: "2.25 MB", link: "#" },
    ],
    comments: [
      {
        id: 1,
        username: "David Lambert",
        userImg: "avatar2",
        comment: "Separate existence is a myth.",
      },
      {
        id: 2,
        username: "Steve Foster",
        userImg: "avatar3",
        comment: "@Henry To an English person it will like simplified",
        reply: {
          username: "Jeffrey Walker",
          comment: "as a skeptical Cambridge friend",
        },
      },
      {
        id: 3,
        username: "Steven Carlson",
        comment: " Separate existence is a myth.",
      },
    ],
  },
  {
    id: 9,
    img: "img5",
    name: "New admin Design",
    description: "It will be as simple as Occidental",
    status: "Completed",
    color: "primary",
    dueDate: "14 Oct, 19",
    commentsCount: 106,
    team: [{ id: 1, img: "avatar3", name: "Nataile Salerino" }],
    startDate: "08 Sept, 2019",
    projectDetails: {
      description:
        "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,",
      points: [
        "To achieve this, it would be necessary",
        "Separate existence is a myth.",
        "If several languages coalesce",
      ],
    },
    files: [
      { name: "Veltrix Landing.Zip", size: "3.25 MB", link: "#" },
      { name: "Veltrix Admin.Zip", size: "3.15 MB", link: "#" },
      { name: "Veltrix Logo.Zip", size: "2.02 MB", link: "#" },
      { name: "Veltrix admin.Zip", size: "2.25 MB", link: "#" },
    ],
    comments: [
      {
        id: 1,
        username: "David Lambert",
        userImg: "avatar2",
        comment: "Separate existence is a myth.",
      },
      {
        id: 2,
        username: "Steve Foster",
        userImg: "avatar3",
        comment: "@Henry To an English person it will like simplified",
        reply: {
          username: "Jeffrey Walker",
          comment: "as a skeptical Cambridge friend",
        },
      },
      {
        id: 3,
        username: "Steven Carlson",
        comment: " Separate existence is a myth.",
      },
    ],
  },
]

const options = {
  chart: {
    height: 500,
    type: "bar",
    toolbar: {
      show: !1,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "14%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: !1,
  },
  series: [
    {
      name: "Overview",
      data: [42, 56, 40, 64, 26, 42, 56, 35, 62],
    },
  ],
  grid: {
    yaxis: {
      lines: {
        show: !1,
      },
    },
  },
  yaxis: {
    title: {
      text: "% (Percentage)",
    },
  },
  xaxis: {
    labels: {
      rotate: -90,
    },
    categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    title: {
      text: "Week",
    },
  },
  colors: ["#556ee6"],
}

const series = [
  {
    name: "Overview",
    data: [42, 56, 40, 64, 26, 42, 56, 35, 62],
  },
]

export { projects, options, series }
