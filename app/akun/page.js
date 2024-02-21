'use client'
import React, { useState } from 'react'
import DefaultLayout from '../components/default_layout/DefaultLayout'
import TambahAccountModal from '../components/tambah_account/TambahAccountModal'
import { Button } from 'antd'

function page() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    function onClickHandle() {
      setIsModalOpen(true);
    }
  
    function onCancelHandle() {
      setIsModalOpen(false);
    }
  
  return (
    // <div>page</div>
    <DefaultLayout>
        ini dari Akun page
        {isModalOpen && (
        <TambahAccountModal
          isOpen={isModalOpen}
          onCancelHandle={onCancelHandle}
        />
      )}
      <Button onClick={onClickHandle}>Tambah Akun</Button>
    </DefaultLayout>
  )
}

export default page