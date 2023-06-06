import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Fruits and Vegetables",
    description:
      "Fruits and Vegetables",
      icon: '🍎' 
  },
  {
    _id: uuid(),
    categoryName: "Grains and Cereals",
    description:
      "Grains and Cereals",
      icon: '🌾' 
  },
  {
    _id: uuid(),
    categoryName: "Dairy Products",
    description: "Dairy Products",
    icon: '🍎' 
  },
];
