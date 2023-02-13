import React from "react";
import Sidebar from "../components/layout/Sidebar/Sidebar";
import "./DefaultLayout.scss";
interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="DefaultLayout">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default DefaultLayout;
