const applyToOptions = [
  "All products",
  "Specific category",
  "Specific products",
  "Buy x get y",
].map((option) => option);

const discountTypesOptions = [
  "Percentage",
  "Fixed amount",
  "Free shipping",
].map((option) => option);

const customerGetsOptions = ["Free", "50% offer", "Specific customers"].map(
  (option) => option
);

const selectProducts = [
  {
    id: 1,
    img: "https://www.pexels.com/photo/duckling-on-black-soil-during-daytime-162140/",
    title: "Bathroom products",
    subTitle: "Blankets",
  },
  {
    id: 2,
    img: "https://www.pexels.com/photo/duckling-on-black-soil-during-daytime-162140/",
    title: "Baby & children",
    subTitle: "Blankets",
  },
  {
    id: 3,
    img: "https://www.pexels.com/photo/duckling-on-black-soil-during-daytime-162140",
    title: "Bathroom products",
    subTitle: "Blankets",
  },
];

const selectCategories = [
  {
    id: 1,
    img: "https://www.pexels.com/photo/duckling-on-black-soil-during-daytime-162140",
    title: "Jumpsuits & Rompers",
    subTitle: "Lorem Ipsum is simply dummy text of",
  },
  {
    id: 2,
    img: "https://www.pexels.com/photo/duckling-on-black-soil-during-daytime-162140",
    title: "Shoes",
    subTitle: "Lorem Ipsum is simply dummy text of",
  },
  {
    id: 3,
    img: "https://www.pexels.com/photo/duckling-on-black-soil-during-daytime-162140/",
    title: "Jumpsuits & Rompers",
    subTitle: "Lorem Ipsum is simply dummy text of",
  },
  {
    id: 4,
    img: "https://www.pexels.com/photo/duckling-on-black-soil-during-daytime-162140/",
    title: "Dinnerware & Tableware",
    subTitle: "Lorem Ipsum is simply dummy text of",
  },
];

export {
  applyToOptions,
  discountTypesOptions,
  customerGetsOptions,
  selectProducts,
  selectCategories,
};
