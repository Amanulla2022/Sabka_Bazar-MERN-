import baverages from "../images/category/beverages.png";
import bakery from "../images/category/bakery.png";
import beauty from "../images/category/beauty.png";
import baby from "../images/category/baby.png";
import fruits from "../images/category/fruits.png";

const categories = [
  {
    name: "Beverages",
    key: "beverages",
    description:
      "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",

    imageUrl: baverages,
    id: "5b675e5e5936635728f9fc30",
  },
  {
    name: "Bakery Cakes and Dairy",
    key: "bakery-cakes-dairy",
    description:
      "The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.",

    imageUrl: bakery,
    id: "5b6899123d1a866534f516de",
  },
  {
    name: "Beauty and Hygiene",
    key: "beauty-hygiene",
    description:
      "Buy beauty and personal care products online in India at best prices.",

    imageUrl: beauty,
    id: "5b68994e3d1a866534f516df",
  },
  {
    name: "Baby Care",
    key: "baby",
    description:
      "Shop online for Baby Products, Diapers, Skin Care Products,etc.",

    imageUrl: baby,
    id: "5b6899683d1a866534f516e0",
  },

  {
    name: "Fruits & Vegetables",
    key: "fruit-and-veg",
    description: "A variety of fresh fruits and vegetables.",

    imageUrl: fruits,
    id: "5b6899953d1a866534f516e2",
  },
];

export default categories;
