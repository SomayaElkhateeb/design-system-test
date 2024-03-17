import React from "react";
import ProductCard from "./ProductCard";
import MobileProductCard from "./MobileProductCard";

const ProductCardParent = () => {
  return (
    <div>
      <ProductCard /> 
      <MobileProductCard />
    </div>
  );
};

export default ProductCardParent;

// <label>
//   <input type="checkbox" className="appearance-none peer" />
//   <svg
//     className="invisible  peer-checked:visible "
//     width="20"
//     height="20"
//     viewBox="0 0 20 20"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <rect width="20" height="20" rx="3" fill="#55C397" />
//     <path
//       d="M12.8619 7.20277L8.88889 11.3286L7.13807 9.51046L7.0633 9.44343C6.80231 9.24234 6.43194 9.26468 6.19526 9.51046C5.93491 9.78083 5.93491 10.2192 6.19526 10.4895L8.41748 12.7972L8.49226 12.8643C8.75324 13.0654 9.12361 13.043 9.36029 12.7972L13.8047 8.18184L13.8693 8.1042C14.0629 7.83317 14.0414 7.44856 13.8047 7.20277C13.5444 6.93241 13.1223 6.93241 12.8619 7.20277Z"
//       fill="white"
//     />
//   </svg>
//   132
// </label>;
