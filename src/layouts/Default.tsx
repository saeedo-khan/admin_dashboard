import React from "react";
import PrimarySearchAppBar from "../components/layout/Navbar/Navbar";
import Sidebar from "../components/layout/Sidebar/Sidebar";
import useWindowDimensions from "../hooks/useWindowDimensions";
import "./DefaultLayout.scss";
interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="default-main">
      <header>
        <PrimarySearchAppBar />
      </header>
      <div className="layout-main">
        <Sidebar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default DefaultLayout;
