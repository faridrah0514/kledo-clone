import React from 'react'
import { ConfigProvider, Space, Switch } from 'antd';


function SwitchV2() {
  return (
    <ConfigProvider theme={{
        components: {
            Button: {
                defaultBg: 'none'
            }
        }
    }}>
        <Switch />
    </ConfigProvider>
    
  )
}

export default SwitchV2