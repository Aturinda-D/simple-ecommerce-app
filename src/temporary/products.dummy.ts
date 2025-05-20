export type productType = {
  id: number;
  image: string;
  title: string;
  price: number;
};

const sampleProducts: productType[] = [
  {
    id: 100,
    image: "assets/images/coat.jpeg",
    title: "Modern & Elegant coats",
    price: 57,
  },
  {
    id: 101,
    image: "assets/images/watch.jpeg",
    title: "Mechanical Watch for Men",
    price: 299,
  },
  {
    id: 102,
    image: "assets/images/shoes-1.webp",
    title: "NextGen Running Shoes",
    price: 57,
  },
];

export default sampleProducts;
