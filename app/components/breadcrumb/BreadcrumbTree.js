"use client";
import { Breadcrumb } from "antd";
import BreadcrumbItem from "antd/es/breadcrumb/BreadcrumbItem";
import Item from "antd/es/list/Item";
import React from "react";

function BreadcrumbTree({ path }) {
  console.log("path");
  //   console.log(path.split('/').filter(Boolean).map((value) => {{title: value}}));
  console.log(path)
  return (
    <Breadcrumb
      className="px-5 py-5"
      items={[{ title: "Dashboard" }].concat(
        path
          .split("/")
          .filter(Boolean)
          .map((value) => {
            return { title: value };
          })
      )}
    ></Breadcrumb>
  );
}

export default BreadcrumbTree;
