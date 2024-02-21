"use client";
import { Button, Form, Input, Modal } from "antd";
import React, { useState } from "react";

function TambahAccountModal({ isOpen, onCancelHandle }) {
  const [openModal, setOpenModal] = useState(isOpen);
  function submitAccount(value) {
    console.log(value);
    onCancelHandle();
  }

  return (
    <Modal
      open={isOpen}
      footer={null}
      closeIcon={false}
    >
      <Form onFinish={submitAccount}>
        <Form.Item name="nama">
          <Input placeholder="nama"></Input>
        </Form.Item>
        <Form.Item name="kode">
          <Input placeholder="kode"></Input>
        </Form.Item>
        <div className="flex justify-end gap-2">
          <Form.Item>
            <Button onClick={onCancelHandle}>Cancel</Button>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">OK</Button>
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
}

export default TambahAccountModal;
