import React from "react";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="p-4 main-bg dark:dark-bg">
      <Header />
      {children}
    </div>
  );
}

export default Layout;
