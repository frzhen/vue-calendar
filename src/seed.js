export const seedData = [
  {
    id: 1,
    weekdayAbbr: 'Mon',
    fullTitle: 'Monday',
    events: [
      { details: 'Get Groceries', edit: false },
      { details: 'Carpool', edit: false }
    ],
    active: true
  },
  {
    id: 2,
    weekdayAbbr: 'Tue',
    fullTitle: 'Tuesday',
    events: [
      { details: 'Yoga/Gym', edit: false }
    ],
    active: false
  },
  {
    id: 3,
    weekdayAbbr: 'Wed',
    fullTitle: 'Wednesday',
    events: [
      { details: 'Work social', edit: false }
    ],
    active: false
  },
  {
    id: 4,
    weekdayAbbr: 'Thu',
    fullTitle: 'Thursday',
    events: [],
    active: false
  },
  {
    id: 5,
    weekdayAbbr: 'Fri',
    fullTitle: 'Friday',
    events: [
      { details: 'Friday dinner/drinks', edit: false }
    ],
    active: false
  },
  {
    id: 6,
    weekdayAbbr: 'Sat',
    fullTitle: 'Saturday',
    events: [
      { details: 'Chill with the parents', edit: false }
    ],
    active: false
  },
  {
    id: 7,
    weekdayAbbr: 'Sun',
    fullTitle: 'Sunday',
    events: [
      { details: 'Netflix/Chill', edit: false }
    ],
    active: false
  }
];

export const errorMsg = "You must type something first!";

export const eventColors = ['#E281EC', '#46cccd', '#00CA71'];
