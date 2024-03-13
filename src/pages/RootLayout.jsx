import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "src/components/main/header/Header";
import Sidebar from "src/components/main/sidebar/Sidebar";

const RootLayout = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(true)

  const sidebarOpenHandler = () => {
    setSidebarIsOpen(prevState => !prevState)
    console.log(sidebarIsOpen)
  }

  return (
    <div className="flex flex-row">
      <div>
        <Sidebar isOpen={sidebarIsOpen} />
      </div>
      <div className="w-full bg-light-1">
        <div className="sticky top-0">
          <Header setIsOpen={sidebarOpenHandler}/>
        </div>
        <main className="p-5 mx-auto 2xl:w-11/12 w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
//  xl:w-11/12
// w-[calc(90vw-64px)]
