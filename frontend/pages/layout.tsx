import globalStyles from "../styles/global";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className="page-layout"
      style={{
        width: "100%",
        height: "100%",
        padding: "0",
      }}
    >
      {children}
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  );
};

export default Layout;
