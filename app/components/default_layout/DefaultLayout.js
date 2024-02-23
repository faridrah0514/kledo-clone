import React from "react";
import { Layout, Switch } from "antd";
import Sidebar from "../sidebar/Sidebar";
import MainHeader from "../header/MainHeader";
import BreadcrumbTree from "../breadcrumb/BreadcrumbTree";
import { usePathname } from "next/navigation";

function DefaultLayout({ children }) {
  const path = usePathname();
  return (
    <Layout>
      <Sidebar path={path} />
      <Layout>
        <MainHeader />
        <BreadcrumbTree path={path} />
        <div className="px-5">
          <div className="bg-white rounded-md min-h-11 px-5 py-5">
            {children}
          </div>
        </div>
      </Layout>
    </Layout>
  );
}

export default DefaultLayout;
