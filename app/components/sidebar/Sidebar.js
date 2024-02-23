"use client";

import { Layout, Menu } from "antd";
import React from "react";
import { sidebarMenu } from "../../static/constant";

import { useState } from "react";
const { Sider } = Layout;

function Sidebar({ path = null }) {
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState([]);

  
  const keys = path.split("/").filter(Boolean)
  return (
    <Sider
      theme="light"
      className="h-screen border-none"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="demo-logo-vertical" />
      <Menu
        defaultSelectedKeys={keys}
        defaultOpenKeys={keys}
        items={sidebarMenu}
        mode="inline"
      />
    </Sider>
  );
}

export default Sidebar;
