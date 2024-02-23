import { Breadcrumb, ConfigProvider, Layout, Menu } from "antd";

import { sidebarMenu } from "./static/constant";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
const { Content } = Layout;

// import MainHeader from "./components/header/MainHeader";
// MainHeader
import Sidebar from "./components/sidebar/Sidebar";
import MainHeader from "./components/header/MainHeader";
import BreadcrumbTree from "./components/breadcrumb/BreadcrumbTree";



export default function Home() {
  return (
      <Layout>
        <Sidebar path={'/'}/>
        <Layout>
          <MainHeader />
            <BreadcrumbTree path={'/'}/>
            <div>
              <div className="bg-white rounded-md min-h-11">
                Nama Saya Farid
              </div>
            </div>
        
        </Layout>
      </Layout>
 
  );
}
