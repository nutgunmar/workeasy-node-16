import { Layout, Menu, Dropdown, Button } from "antd";
import { SettingOutlined, HomeOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import React from "react";
import { useTheme } from "../utils/ThemeContext";

const { Header, Sider, Content } = Layout;

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { projectName } = useTheme();

  const userMenu = (
    <Menu>
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={200} theme="dark">
        <Menu mode="inline" defaultSelectedKeys={["1"]} theme="dark">
          <Menu.SubMenu key="group1" icon={<HomeOutlined />} title="Group 1">
            <Menu.Item key="1">
              <Link href="/page1">Page 1</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link href="/page2">Page 2</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link href="/page3">Page 3</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link href="/page4">Page 4</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link href="/page5">Page 5</Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="group2" icon={<HomeOutlined />} title="Group 2">
            <Menu.Item key="6">
              <Link href="/page6">Page 6</Link>
            </Menu.Item>
            <Menu.Item key="7">
              <Link href="/page7">Page 7</Link>
            </Menu.Item>
            <Menu.Item key="8">
              <Link href="/page8">Page 8</Link>
            </Menu.Item>
            <Menu.Item key="9">
              <Link href="/page9">Page 9</Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="10" icon={<SettingOutlined />}>
            <Link href="/settings">Settings</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header>
          <div style={{ fontSize: "20px", fontWeight: "bold" }}>
            {projectName}
          </div>
          <Dropdown overlay={userMenu} trigger={["click"]}>
            <Button
              type="text"
              icon={<UserOutlined />}
              style={{ color: "#fff" }}
            >
              User
            </Button>
          </Dropdown>
        </Header>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
