export type productType = {
  id: number;
  image: string;
  title: string;
  price: number;
};

const sampleProducts: productType[] = [
  {
    id: 1,
    image: "assets/images/coat.jpeg",
    title: "Modern & Elegant coats",
    price: 57,
  },
  {
    id: 2,
    image: "assets/images/watch.jpeg",
    title: "Mechanical Watch for Men",
    price: 299,
  },
  {
    id: 3,
    image: "assets/images/shoes.jpeg",
    title: "NextGen Running Shoes",
    price: 57,
  },
  {
    id: 4,
    image: "/assets/images/bag_1.jpg",
    title: "bag_1",
    price: 300,
  },
  {
    id: 5,
    image: "/assets/images/bag_2.jpg",
    title: "bag_2",
    price: 216,
  },
  {
    id: 6,
    image: "/assets/images/bag_3.jpg",
    title: "bag_3",
    price: 280,
  },
  {
    id: 7,
    image: "/assets/images/shoe_1.jpg",
    title: "shoe_1",
    price: 100,
  },
  {
    id: 8,
    image: "/assets/images/shoe_2.jpg",
    title: "shoe_2",
    price: 87,
  },
  {
    id: 9,
    image: "/assets/images/shoe_3.jpg",
    title: "shoe_3",
    price: 120,
  },
  {
    id: 10,
    image: "/assets/images/trouser_1.jpg",
    title: "trouser_1",
    price: 60,
  },
  {
    id: 11,
    image: "/assets/images/trouser_2.jpg",
    title: "trouser_2",
    price: 80,
  },
  {
    id: 12,
    image: "/assets/images/trouser_3.jpg",
    title: "trouser_3",
    price: 110,
  },
];

export default sampleProducts;
