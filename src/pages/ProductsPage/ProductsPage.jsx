import React from "react";
import { PaymentContainer, Tooltip } from "src/app/components/optimized";

const ProductsPage = () => {
  return (
    <div className="p-20">
      ProductsPage
      <>
        <PaymentContainer />
      </>
    </div>
  );
};

/* 
{
  <div className="relative group">

  <TooltipIcon />

<div className="absolute right-3 bg-title text-white text-sm py-1 px-1.5 rounded opacity-0 group-hover:scale-100  group-hover:opacity-100 transition-opacity duration-300">
  {title}
  <svg
    className="absolute text-title h-2 w-full left-0 top-full"
    x="0px"
    y="0px"
    viewBox="0 0 255 255"
  >
    <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
  </svg>
</div> 
</div>
}
*/
export default ProductsPage;
// const ParentComponent = () => {
//   const [selectedPackage, setSelectedPackage] = useState("");

//   const handlePackageSelection = (event) => {
//     setSelectedPackage(event.target.value);
//   };

//   // Demo data array
//   const packages = [
//     { id: 1, name: "20,000 emails/month", price: "SAR 50" },
//     { id: 2, name: "50,000 emails/month", price: "SAR 100" },
//   ];

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Select Your Package</h1>
//       <SelectPackage
//         packages={packages}
//         onPackageSelect={handlePackageSelection}
//       />
//       <p>You selected: {selectedPackage}</p>
//     </div>
//   );
// };

// const SelectPackage = ({ packages, onPackageSelect }) => {
//   return (
//     <div className="w-64 bg-white shadow-lg px-6 py-4 rounded-lg">
//       <h2 className="text-xl font-bold mb-4">Select Package</h2>
//       <p>Choose one of our package for more emails</p>
//       {packages.map((pkg) => (
//         <div key={pkg.id} className="mb-4">
//           <input
//             type="radio"
//             id={`package${pkg.id}`}
//             name="package"
//             value={`${pkg.name} - ${pkg.price}`}
//             onChange={onPackageSelect}
//             className="mr-2"
//           />
//           <label
//             htmlFor={`package${pkg.id}`}
//           >{`${pkg.name} - ${pkg.price}`}</label>
//         </div>
//       ))}
//     </div>
//   );
// };
