let products = [
  {
    name: "Apple MacBook Pro 2021",
    id: "Apple-MacBook-Pro-2021",
    price: "2,899",
    percentDiscount: null,
    previousPrice: null,
    score: 4.7,
    image: "Apple-MacBook-Pro-2021.jpg",
    color: ["#9e9e9e"],
    model: "MK193",
    screenSize: 16.2,
  },
  {
    name: "Asus ROG Strix SCAR 15",
    id: "Asus-ROG-Strix-SCAR-15",
    price: "2,499",
    percentDiscount: null,
    previousPrice: null,
    score: 4.5,
    image: "Asus-ROG-Strix-SCAR-15.jpg",
    color: ["#212121", "#443b3c", "#002171"],
    model: "G513IE-HN060",
    screenSize: 15.6,
  },
  {
    name: "Lenovo Legion 7",
    id: "Lenovo-Legion-7",
    price: "2,449",
    percentDiscount: 16,
    previousPrice: "2,899",
    score: 4.3,
    image: "Lenovo-Legion-7.jpg",
    color: ["#9e9e9e"],
    model: "16ITHg6",
    screenSize: 16,
  },
  {
    name: "Acer Nitro 5",
    id: "Acer-Nitro-5",
    price: "2,649",
    percentDiscount: null,
    previousPrice: null,
    score: 4.8,
    image: "Acer-Nitro-5.jpg",
    color: ["#002171", "#010136"],
    model: "AN515-45-R6WC",
    screenSize: 15.6,
  },
  {
    name: "MSI Creator Z16",
    id: "MSI-Creator-Z16",
    price: "2,300",
    percentDiscount: 12,
    previousPrice: "2,599",
    score: 4.3,
    image: "MSI-Creator-Z16.jpg",
    color: ["#dedede"],
    model: "A12UET",
    screenSize: 16,
  },
];

export function getProducts() {
  return products;
}

export function getProduct(id) {
  return products.find(
    (product) => product.id === id
  );
}