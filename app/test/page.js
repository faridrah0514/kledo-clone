"use client";
import { Button, Form, Input } from "antd";
import React from "react";
import DefaultLayout from "../components/default_layout/DefaultLayout";

function page() {
  return (
    <DefaultLayout>
      <Form onFinish={(value) => console.log("value: ", value)}>
        <Form.Item label="ini" name="inilahla">
          <Input placeholder="inilah"></Input>
        </Form.Item>
        <Form.Item label="itu" name="itulahya">
          <Input placeholder="inilah"></Input>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">
            Tombol
          </Button>
        </Form.Item>
      </Form>
    </DefaultLayout>
  );
}

export default page;
