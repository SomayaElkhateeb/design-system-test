import { Outlet } from "react-router-dom";

import Header from "src/components/main/header/Header";
import Sidebar from "src/components/main/sidebar/Sidebar";

const App = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="w-full">
        <div className="sticky top-0">
          <Header />
        </div>
        <main className="py-8 mx-auto w-[calc(90vw - 64px)] lg:w-11/12">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default App;
