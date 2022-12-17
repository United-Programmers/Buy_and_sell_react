const date = new Date();
const d = date.getDate();
const m = date.getMonth();
const y = date.getFullYear();

const events = [

  {
    id: 1,
    title: 'Long Event',
    start: new Date(y, m, d - 5),
    end: new Date(y, m, d - 2),
    className: 'bg-warning text-white'
  },
  {
    id: 2,
    title: 'Repeating Event',
    start: new Date(y, m, d - 3, 16, 0),
    allDay: false,
    className: 'bg-info text-white'
  },
  {
    id: 3,
    title: 'Repeating Event',
    start: new Date(y, m, d + 4, 16, 0),
    allDay: false,
    className: 'bg-primary text-white'
  },
  {
    id: 4,
    title: 'Meeting',
    start: new Date(y, m, d, 10, 30),
    allDay: false,
    className: 'bg-success text-white'
  },
  {
    id: 5,
    title: 'Lunch',
    start: new Date(y, m, d, 12, 0),
    end: new Date(y, m, d, 14, 0),
    allDay: false,
    className: 'bg-danger text-white'
  },
  {
    id: 6,
    title: 'Birthday Party',
    start: new Date(y, m, d + 1, 19, 0),
    end: new Date(y, m, d + 1, 22, 30),
    allDay: false,
    className: 'bg-success text-white'
  },
  {
    id: 7,
    title: 'Click for Google',
    start: new Date(y, m, 28),
    end: new Date(y, m, 29),
    url: 'http://google.com/',
    className: 'bg-dark text-white'
  },
  {
    id: 8,
    title: 'All Day Event',
    start: new Date(y, m, 1),
    className: 'text-white'
    },
]

const calenderDefaultCategories = [
  {
    id: 1,
    title: "New Event Planning",
    type: "bg-success",
  },
  {
    id: 2,
    title: "Meeting",
    type: "bg-info",
  },
  {
    id: 3,
    title: "Generating Reports",
    type: "bg-warning",
  },
  {
    id: 4,
    title: "Create New theme",
    type: "bg-danger",
  },
]

export { calenderDefaultCategories, events }
