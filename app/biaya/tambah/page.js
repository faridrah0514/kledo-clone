"use client";
import DefaultLayout from "@/app/components/default_layout/DefaultLayout";
import {
  Button,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space,
  Switch,
  Typography,
} from "antd";
const { Title } = Typography;
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import TambahAccountModal from "@/app/components/tambah_account/TambahAccountModal";

function page() {
  const today = dayjs();
  const [isModalOpen, setIsModalOpen] = useState(false);
  function onClickHandle() {
    setIsModalOpen(true);
  }

  function onCancelHandle() {
    setIsModalOpen(false);
  }

  return (
    <>
      {isModalOpen && (
        <TambahAccountModal
          isOpen={isModalOpen}
          onCancelHandle={onCancelHandle}
        />
      )}
      <DefaultLayout>
        <div>
          <Title level={1} className="mb-0" style={{ marginBottom: "0" }}>
            Tambah biaya
          </Title>
        </div>
        <div>
          <Form
            className="border"
            layout="vertical"
            onFinish={(value) => console.log(value)}
          >
            <Form.Item label="Dibayar dari?" name="dibayardari">
              <Select
                className="w-[260px]"
                placeholder="masukkan"
                dropdownRender={(menu) => (
                  <>
                    {menu}
                    <Divider />
                    <Button type="link" onClick={onClickHandle}>
                      Tambahin dong
                    </Button>
                  </>
                )}
              />
            </Form.Item>
            <div className="flex">
              <Form.Item name="iniSwitch">
                <Switch />
              </Form.Item>
              <h1>Bayar Nanti</h1>
            </div>

            <Form.Item label="Penerima" name="penerima">
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
            <Form.Item label="Tanggal Transaksi" name="tanggal">
              <DatePicker maxDate={today}></DatePicker>
            </Form.Item>

            <Row>
              <Col span={8} className="pr-5">
                <Form.Item label="Satu" name="darisatu">
                  <Input placeholder="Basic usage" />
                </Form.Item>
              </Col>

              <Col span={8} className="pr-5">
                <Form.Item label="Dua" name="daridua">
                  <Input placeholder="Basic usage" />
                </Form.Item>
              </Col>
              <Col span={8} className="pr-5">
                <Form.Item label="Tiga" name="daritiga">
                  <Input placeholder="Basic usage" />
                </Form.Item>
              </Col>
            </Row>
            <Button htmlType="submit">Tambahin dong</Button>
          </Form>
        </div>
      </DefaultLayout>
    </>
  );
}

export default page;
