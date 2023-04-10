import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const AdminLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout
            style={{
                maxWidth: 1200,
                minHeight: '100vh'
               
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div
                    style={{
                        
                        height: 32,
                        margin: 16,
                        background: 'rgba(255, 255, 255, 0.2)',
                    }}
                />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" >
                    <Menu.Item key={1}>
                        <Link to="/admin">Dashboard</Link>
                    </Menu.Item>
                    <Menu.Item key={2}>
                        <Link to="/admin/products">Product</Link>
                    </Menu.Item>
                    <Menu.Item key={3}>
                        <Link to="/admin/products/add">Add product</Link>
                    </Menu.Item>
                    <Menu.Item key={4}>
                        <Link to="/admin/products/:id/update">update product</Link>
                    </Menu.Item>
                    <Menu.Item key={5}>
                        <Link to="/admin/products/category">category</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                />
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2023 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    )
}

export default AdminLayout
