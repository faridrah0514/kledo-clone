"use client";
import DefaultLayout from "@/app/components/default_layout/DefaultLayout";
import {
  Button,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Row,
  Select,
  Space,
  Switch,
  Typography,
} from "antd";
const { Title } = Typography;
import React from "react";
import dayjs from "dayjs";

function page() {
  const today = dayjs();
  // const dayFormat = "YYYY-MM-DD";
  return (
    <>
      <DefaultLayout>
        <div>
          <Title level={1} className="mb-0" style={{ marginBottom: "0" }}>
            Tambah biaya
          </Title>
        </div>
        <div>
          <Form className="border" layout="vertical">
            <Form.Item label="Dibayar dari?" required={[{ required: true }]}>
              <Select
                className="w-[260px]"
                placeholder="masukkan"
                dropdownRender={(menu) => (
                  <>
                    {menu}
                    <Divider />
                    <Button type="link">Tambahin dong</Button>
                  </>
                )}
              />
            </Form.Item>
            <Form.Item>
              <Switch />
              <Space>Bayar Nanti</Space>
            </Form.Item>
            <Form.Item label="Penerima" required={[{ required: true }]}>
              <Select
                className="w-[260px]"
                placeholder="masukkan"
                dropdownRender={(menu) => (
                  <>
                    {menu}
                    <Divider />
                    <Button type="link">Tambahin dong</Button>
                  </>
                )}
              />
            </Form.Item>
            <Form.Item
              label="Tanggal Transaksi"
              required={[{ required: true }]}
            >
              <DatePicker maxDate={today}></DatePicker>
            </Form.Item>

            <Row>
              <Col span={8} className="pr-5">
                <Form.Item label="Satu">
                  <Input placeholder="Basic usage" />
                </Form.Item>
              </Col>
              
              <Col span={8} className="pr-5">
                <Form.Item label="Dua">
                  <Input placeholder="Basic usage" />
                </Form.Item>
              </Col>
              <Col span={8} className="pr-5">
                <Form.Item label="Tiga">
                  <Input placeholder="Basic usage" />
                </Form.Item>
              </Col>
            </Row>
            <Button type="link">Tambahin dong</Button>
          </Form>
        </div>
      </DefaultLayout>
    </>
  );
}

export default page;
