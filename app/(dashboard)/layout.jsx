"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

import { store } from "@/lib/store";
import { Provider } from "react-redux";

const DashboardLayout = ({ children }) => {
  return (
    <div className="h-full relative ">
      <Provider store={store}>
        <div className="hidden h-full md:flex md:w-fit md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900 ">
          <Sidebar />
        </div>
      </Provider>
      <main className="md:pl-28 ">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
