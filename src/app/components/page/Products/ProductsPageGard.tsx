import { Navigate, useLocation } from "react-router-dom";

const ProductsPageGard = ({ children }:{children:React.ReactNode}) => {
  const { pathname } = useLocation();
  if (pathname === "/products") {
    return <Navigate to="/products/AllProducts" />;
  }
  return children;
};
export default ProductsPageGard;
