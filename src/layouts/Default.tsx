import React from "react";
import Sidebar from "../components/layout/Sidebar/Sidebar";
interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ flex: "10" }}>{children}</main>
    </div>
  );
};

export default DefaultLayout;
