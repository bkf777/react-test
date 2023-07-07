import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button,  Breadcrumb } from 'antd';
import styles from '../assets/styles/home.module.scss';

const { Header, Sider, Content, Footer } = Layout;

const Home: React.FC = () => {
    //控制左侧菜单栏的展开和收起
    const [collapsed, setCollapsed] = useState(false);
    //路由跳转的点击事件
    const handleClick = (e: any) => {
        console.log('click ', e);
    };

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    onClick={handleClick}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'nav 1',
                            children: [
                                {
                                    key: '1-1',
                                    label: 'nav 1-1',
                                },
                                {
                                    key: '1-2',
                                    label: 'nav 1-2',
                                },
                                {
                                    key: '1-3',
                                    label: 'nav 1-3',
                                },
                            ],
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 2',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'nav 3',
                        },
                    ]}
                />
            </Sider>
            <Layout className={styles.homeLayout}>
                <Header className={styles.homeHeader}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                            color: '#b4c7dd',
                        }}
                    />
                </Header>
                <Breadcrumb
                className={styles.homeBreadcrumb}
                    items={[
                        {
                            title: 'Home',
                        },
                        {
                            title: <a href="">Application Center</a>,
                        },
                        {
                            title: <a href="">Application List</a>,
                        },
                        {
                            title: 'An Application',
                        },
                    ]}
                />
                <Content className={styles.homeContent}>
                    Content
                </Content>
                
            </Layout>
        </Layout>
    );
};

export default Home;