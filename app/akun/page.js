'use client'
import React, { useEffect, useState } from 'react'
import DefaultLayout from '../components/default_layout/DefaultLayout'
import TambahAccountModal from '../components/tambah_account/TambahAccountModal'
import { Button, Table } from 'antd'


function page() {

    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const [ isData, setIsData ] = useState(null);
    function onClickHandle() {
      setIsModalOpen(true);
    }
  
    function onCancelHandle() {
      setIsModalOpen(false);
    }

    useEffect(
      () => {
        fetch('http://localhost:3000/api/actor')
        .then((res) => res.json())
        .then((data) => {
          setIsData(data);
        })
      }, []
    )
  return (
    <DefaultLayout> 
      ini dari Akun page
        {isModalOpen && (
        <TambahAccountModal
          isOpen={isModalOpen}
          onCancelHandle={onCancelHandle}
        />
      )}
      <Button onClick={onClickHandle}>Tambah Akun</Button>
          {isData && (
            <Table dataSource={isData.data} columns={
              isData.column.map(
                (value) => {
                  return {
                    title: value,
                    dataIndex: value,
                    key: value
                  }
                }
              )
            } />
          )}
      

    </DefaultLayout>
  )
}

export default page