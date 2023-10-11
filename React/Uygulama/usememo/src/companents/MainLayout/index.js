import React, {  useState } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";

import UseMemoPage from "../../pages/usememo";

const colorBgContainer = "#e0e0e0";

import { UploadOutlined } from "@ant-design/icons";
import "./index.css";

const { Header, Sider, Content } = Layout;

const MainLayout = () => {

  const [collapsed] = useState(false);


  return (
    <BrowserRouter>
      <Layout className="mainLayout">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UploadOutlined />,
                label: <Link to="/useMemo">useMemo</Link>,
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Routes>
              <Route path="/useMemo" element={<UseMemoPage />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default MainLayout;