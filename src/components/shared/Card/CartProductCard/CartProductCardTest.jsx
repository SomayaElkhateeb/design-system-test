// Muhammed Abdelhakeem

const sampleProduct = {
  name: "Sample Product",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  price: 29.99,
  images: [
    "https://placebeard.it/640x360",
    "https://placebeard.it/640x360",
    "https://placebeard.it/640x360",
  ],
};
import CartProductCard from "./CartProductCard";

const CartProductCardTest = () => {
  return (
    <div>
      <CartProductCard product={sampleProduct} />
    </div>
  );
};

export default CartProductCardTest;
