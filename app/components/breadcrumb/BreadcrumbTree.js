import { Breadcrumb } from "antd";
import React from "react";

function BreadcrumbTree({ path }) {
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
