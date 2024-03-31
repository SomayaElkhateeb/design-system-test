const customerSegmentOptions = [
  "All customers",
  "Specific customer groups",
  "Specific customers",
].map((option) => option);

const selectCustomerGroups = [
  {
    id: 1,
    count: 54,
    title: "Brooklyn Simmons",
    subTitle: "This group is high niche",
  },
  {
    id: 2,
    count: 35,
    title: "Top clients",
    subTitle: "This group is high niche",
  },
  {
    id: 3,
    count: 50,
    title: "Loyal clients",
    subTitle: "This group is high niche",
  },
];
const selectCustomers = [
  {
    id: 1,
    fName: "walied",
    lName: "sayed",
    subTitle: "nathan.roberts@example.com",
    img: "https://www.pexels.com/photo/duckling-on-black-soil-during-daytime-162140/",
  },
  {
    id: 2,
    fName: "ahmed",
    lName: "ramy",
    subTitle: "nathan.roberts@example.com",
    img: "https://www.pexels.com/photo/duckling-on-black-soil-during-daytime-162140/",
  },
  {
    id: 3,
    fName: "salma",
    lName: "sayed",
    subTitle: "nathan.roberts@example.com",
    img: "https://www.pexels.com/photo/duckling-on-black-soil-during-daytime-162140/",
  },
  {
    id: 4,
    fName: "salma",
    lName: "",
    subTitle: "nathan.roberts@example.com",
    img: "https://www.pexels.com/photo/duckling-on-black-soil-during-daytime-162140/",
  },
];
export { customerSegmentOptions, selectCustomerGroups, selectCustomers };
