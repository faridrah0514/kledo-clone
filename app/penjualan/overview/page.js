"use client";
import DefaultLayout from "@/app/components/default_layout/DefaultLayout";
import { Card, Col, Row, Avatar } from "antd";
import React from "react";

const { Meta } = Card;

function page() {
  return (
    <DefaultLayout>
      <h1 className="font-bold pb-5">Overview Penjualan</h1>
      <Row>
        <Col span={16}>
          <Row>
            <Col span={12}>
              <Card className="mx-1 my-1">
                <Meta
                  avatar={
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                  }
                  title="Card title"
                  description="This is the description"
                />
              </Card>
            </Col>
            <Col span={12}>
            <Card className="mx-1 my-1">
                <Meta
                  avatar={
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                  }
                  title="Card title"
                  description="This is the description"
                />
              </Card>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
            <Card className="mx-1 my-1">
                <Meta
                  avatar={
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                  }
                  title="Card title"
                  description="This is the description"
                />
              </Card>
            </Col>
            <Col span={12}>
            <Card className="mx-1 my-1">
                <Meta
                  avatar={
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                  }
                  title="Card title"
                  description="This is the description"
                />
              </Card>
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          iya
        </Col>
      </Row>
    </DefaultLayout>
  );
}

export default page;
