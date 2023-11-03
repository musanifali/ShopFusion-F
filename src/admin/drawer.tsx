import React, { useState } from 'react';
import { Layout, Drawer, Menu } from 'antd';
import {
    CodeSandboxOutlined,
    ShoppingCartOutlined,
  PlusSquareOutlined,
  RollbackOutlined,
  UsergroupDeleteOutlined,
  SettingOutlined,
  WindowsOutlined,
  LoginOutlined
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';

import TopBar from './topbar';

const App = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const navigate = useNavigate();

  const openDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate("/");
  };

  return (
    <Layout>
      <TopBar openDrawer={openDrawer} />
      <Drawer
        title="UET Lahore Narowal Campus"
        placement="left"
        closable={true}
        onClose={closeDrawer}
        visible={drawerVisible}
      >
        <Menu theme="light" mode="vertical">
        <Menu.Item key="dash oard" icon={<WindowsOutlined />} onClick={closeDrawer}>
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="books" icon={<CodeSandboxOutlined />} onClick={closeDrawer}>
            <Link to="/books">Products</Link>
          </Menu.Item>
          <Menu.Item key="students" icon={<ShoppingCartOutlined />} onClick={closeDrawer}>
            <Link to="/students">Orders</Link>
          </Menu.Item>
          <Menu.Item key="issue" icon={<UsergroupDeleteOutlined />} onClick={closeDrawer}>
            <Link to="/issue">Customers</Link>
          </Menu.Item>
          <Menu.Item key="return" icon={<SettingOutlined />} onClick={closeDrawer}>
            <Link to="/return">Settings</Link>
          </Menu.Item>
         
          <Menu.Item key="Logout" icon={<LoginOutlined  />} onClick={handleLogout}>
            Logout
          </Menu.Item>
        </Menu>
      </Drawer>
      {/* The rest of your application */}
    </Layout>
  );
};

export default App;
