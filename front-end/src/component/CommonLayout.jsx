import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


export function CommonLayout() {
  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden">
      <Header />
      <div className="flex flex-1 flex-col gap-4 sm:gap-6 overflow-y-auto bg-[#EEE6E6]">

        <Outlet />
        {/* Should do! */}
        <Footer />
      </div>
    </div>
  );
}