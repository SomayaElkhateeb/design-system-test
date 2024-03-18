import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "src/app/components/main/Header";
import Sidebar from "src/app/components/main/Sidebar";



const RootLayout = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(true);

  const sidebarOpenHandler = () => {
    setSidebarIsOpen((prevState) => !prevState);
    console.log(sidebarIsOpen);
  };

  return (
    <div className="flex flex-row">
      <div>
        <Sidebar isOpen={sidebarIsOpen} />
      </div>
      <div className="w-full bg-light-1">
        <div className="sticky top-0 z-50">
          <Header setIsOpen={sidebarOpenHandler} />
        </div>
        <main className="w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
//  xl:w-11/12
// w-[calc(90vw-64px)]
