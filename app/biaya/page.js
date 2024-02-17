"use client";
import React from "react";
import DefaultLayout from "../components/default_layout/DefaultLayout";
import { Button, Typography, Card, Table } from "antd";
import Link from "next/link";

const { Title } = Typography;

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

<Table dataSource={dataSource} columns={columns} />;

function page() {
  return (
    <DefaultLayout>
      <div className="flex justify-between items-center">
        <Title level={1} className="mb-0" style={{ marginBottom: "0" }}>
          Biaya
        </Title>

        <div className="flex gap-2 items-center">
          <Link href={"/biaya/tambah"}>
            <Button href="/biaya/tambah">Tambah Biaya</Button>
          </Link>

          {/* <Button>ini tombol</Button>
          <Button>ini tombol</Button>
          <Button>ini tombol</Button> */}
        </div>
      </div>
      <div className="flex gap-4 overflow-auto py-5">
        <Card
          style={{ minWidth: "260px" }}
          hoverable
          onClick={() => console.log("di click")}
        >
          ini
        </Card>
        <Card
          style={{ minWidth: "260px" }}
          hoverable
          onClick={() => console.log("di click")}
        >
          itu
        </Card>
        <Card
          style={{ minWidth: "260px" }}
          hoverable
          onClick={() => console.log("di click")}
        >
          itu
        </Card>
        <Card
          style={{ minWidth: "260px" }}
          hoverable
          onClick={() => console.log("di click")}
        >
          itu
        </Card>
        <Card
          style={{ minWidth: "260px" }}
          hoverable
          onClick={() => console.log("di click")}
        >
          itu
        </Card>
        <Card
          style={{ minWidth: "260px" }}
          hoverable
          onClick={() => console.log("di click")}
        >
          itu
        </Card>
      </div>
      <div>
        <Table dataSource={dataSource} columns={columns} />;
      </div>
    </DefaultLayout>
  );
}

export default page;
