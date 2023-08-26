import React, { useEffect, useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    PoweroffOutlined
} from '@ant-design/icons';
import avatar from '@/assets/images/loading.gif';
import { MenuProps } from 'antd/lib/menu';
import { Layout, Menu, Button, Breadcrumb, Space, Dropdown, Avatar } from 'antd';
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import styles from '../assets/styles/home.module.scss';
import { toLogout } from '@/server/login';
import { useRequest } from 'ahooks';
import { resType } from "@/server/resType"

const { Header, Sider, Content } = Layout;

const Home: React.FC = () => {
    //控制左侧菜单栏的展开和收起
    const [collapsed, setCollapsed] = useState(true);
    const location = useLocation()
    let firstPath = location.pathname.split('/')[1]
    const [openKeys, setOpenKeys] = useState<string>(firstPath);
    //菜单默认的默认展开
    useEffect(() => {
        setOpenKeys(firstPath)
        console.log(openKeys)
    }, [location.pathname])
    const navigate = useNavigate()
    //路由跳转的点击事件
    const handleClick = (e: any) => {
        navigate(e.key)
    };
    //退出登录的请求
    const { data, error, loading,run } = useRequest(toLogout, {
        manual: true,
        onSuccess: (data:resType) => {
            if (data.data.code === 200) {
                sessionStorage.removeItem('userToken')
            navigate('/login')
            }
            
        }
    })
    //退出登录
    const logout = (event:any) => {
        event.preventDefault()
        const userInfo = sessionStorage.getItem('userToken')
        console.log(userInfo)
        run()
    }
    //头像下拉框的菜单项
    const avatarItems: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <a href="#" onClick={logout}>
                    &nbsp;&nbsp;&nbsp;logout
                </a>
            ),
            icon: <PoweroffOutlined />
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    &nbsp;&nbsp;&nbsp;personal
                </a>
            ),
            icon: <UserOutlined />
        },
    ];
    //左侧导航栏的菜单项
    const routerItems: MenuProps['items'] | null = [
        {
            key: '/page1',
            icon: <UserOutlined />,
            label: 'nav 1',
        },
        {
            key: '/page2',
            icon: <VideoCameraOutlined />,
            label: 'nav 2',
        },
        {
            key: '/page3',
            icon: <UploadOutlined />,
            label: 'nav 3',
            children: [
                {
                    key: '/page3/page1',
                    icon: <UploadOutlined />,
                    label: 'nav 3',
                },
                {
                    key: '/page3/page2',
                    icon: <UploadOutlined />,
                    label: 'nav 3',
                },
            ]
        },
        {
            key: '/page4',
            icon: <UploadOutlined />,
            label: 'nav 4',
            children: [
                {
                    key: '/page4/page1',
                    icon: <UploadOutlined />,
                    label: 'nav 3',
                },
                {
                    key: '/page4/page2',
                    icon: <UploadOutlined />,
                    label: 'nav 3',
                },
            ]
        },
    ]
    return (
        <Layout>
            {/* 左侧菜单栏 */}
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[location.pathname]}
                    defaultOpenKeys={[`/${openKeys}`]}
                    onClick={handleClick}
                    items={routerItems}
                />
            </Sider>
            {/* 右侧内容区域 */}
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
                    <Dropdown menu={{ items: avatarItems }} placement="bottom" className={styles.homeAvatar} >
                        <Avatar shape="square" size={54} src={avatar} />
                    </Dropdown>
                </Header>
                {/*主题*/}
                <Content className={styles.homeContent}>
                    <Outlet />
                </Content>

            </Layout>
        </Layout>
    );
};

export default Home;