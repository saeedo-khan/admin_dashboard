import React from "react";
import PrimarySearchAppBar from "../components/layout/Navbar/Navbar";
import Sidebar from "../components/layout/Sidebar/Sidebar";
import useWindowDimensions from "../hooks/useWindowDimensions";
import "./DefaultLayout.scss";
interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const { width, height } = useWindowDimensions();
  return (
    <div className="default-main">
      <header>
        <PrimarySearchAppBar />
      </header>
      <div className="layout-main">
        <div className="Sidebar">
          <Sidebar />
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default DefaultLayout;
