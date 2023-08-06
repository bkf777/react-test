# React后台管理

## 1、项目环境准备

### 1、项目搭建

```
使用vite或脚手架创建react项目
1、vite
npm init vite@latest
2、react脚手架
npm create react-app my_app
```

### 2、目录初始化

去除多余文件

![image-20230630145548411](D:\BaiduNetdiskDownload\React\management\markdown images\image-20230630145548411.png)

### 3、样式初始化和SCSS安装

1、安装reset.css

```
npm i reset-css
```

2、在入口文件引入reset.css

```
import "reset-css"
```

3、安装scss和scss-loader

```
npm i --save--dev sass
npm i --save--dev scss-loader
```

4、在src下新建assets/styles/global.scss全局样式

![image-20230630150222880](D:\BaiduNetdiskDownload\React\management\markdown images\image-20230630150222881.png)

5、在入口文件引入全局样式

```
import "@/assets/styles/global.scss"
```

6、@的路径配置

在vite.config.ts中

```
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

```

在配置过程可能会出现import引入错误,原因是因为在node中的path模块缺少ts的类型，所以需要先引入type/node

```
npm i -D @type/node
```

```
import * as path from 'path'
```

7、@的路径提示

在tsconfig.json中配置

```
/* @ */
    "baseUrl": "./src",
    "paths": {
      "@/*": ["src/*"]
    }
```

### 4、SCSS的模块化

scss的命名为 xxx.module.scss,例如：

![image-20230630152255631](D:\BaiduNetdiskDownload\React\management\markdown images\image-202306301522552.png)

在引入时

```
import styles from "./..../comp1.module.scss"

//使用时,给元素的类名加上对应的类名

className={styles.box}或
className="{styles[box]}"
```

### 5、AntD的引入

看文档

### 6、路由



#### 1、新建views文件夹来存放路由组件

![image-20230705142438216](C:\Users\bbbkf\AppData\Roaming\Typora\typora-user-images\image-20230705142438226.png)

两种方式

#### 1、使用路由表注册

##### 1、注册路由表

新建router/routes.tsx

```
import Home from '../views/Home.tsx'
import About from '../views/About.tsx'
import { Navigate } from 'react-router-dom'

const Routes = [
    { path: '/', element: <Navigate to="/home" />},
    { path: '/home', element:<Home />},
    { path: '/about', element:<About />},

]

export default Routes
```

#### 2、旧路由注册

##### 2、导入模块和react-router-dom

```
import App from '../App'
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom'
import Home from '../views/Home'
import About from '../views/About'
```

注意使用 Navigate来重定向

```
<Route path="/" element={<Navigate to="/home"/>} />
```

```
const baseRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />}>
                <Route path="/" element={<Navigate to="/home"/>} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Route>
            </Routes>
        </Router>
    )
}
```

#### 3、使用路由

在main.tsx中引入

```
import Router from './router/index.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
	{/* 普通路由引入 */}
    {/* <Router /> */}
    {/* 路由表的形式引入 */}
  <Router1>
    <App />
  </Router1>
  </React.StrictMode>,
)
```

#### 4、路由的懒加载

导入react中的一个懒加载函数lazy

```
import { lazy } from 'react'

const Home = lazy(() => import('../views/Home.tsx'))
const About = lazy(() => import('../views/About.tsx'))
```

然后会报错，需要一个loading

从新引入,使用

```
<React.Suspense fallback={<div>Loading...</div>}>
    xxx
</React.Suspense>
```

```
import React，{lazy} from 'react'

const Home = lazy(() => import('../views/Home.tsx'))
const About = lazy(() => import('../views/About.tsx'))

const Routes = [
    { path: '/', element: <Navigate to="/home" />},
    { path: '/home', element:
    <React.Suspense fallback={<div>Loading...</div>}>
    <Home />
    </React.Suspense>
    },
    { path: '/about', element:
    <React.Suspense fallback={<div>Loading...</div>}>
    <About />
    </React.Suspense>
},

```

使用高阶组件，抽离loading组件

```
const WithLoadingComponent = (component:JSX.Element) =>(
    <React.Suspense fallback={<div>Loading...</div>}>
    {component}
    </React.Suspense>
)

const Routes = [
    { path: '/', element: <Navigate to="/home" />},
    { path: '/home', element:
    WithLoadingComponent(<Home />)
    },
    { path: '/about', element:
    WithLoadingComponent(<About />)
},

```

## 2、项目搭建

### 1、首页views/Home.tsx

引入Layout布局

**引入图标**

```
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
```

****

**引入{Layout布局组件，Menu菜单组件，Button按钮组件，tehem主题}组件**

```
import { Layout, Menu, Button, theme } from 'antd';
```

****

**collapsed和setCollapsed控制侧边栏的展开和收起**

**三个组件Header，Content，Footer**

****

```
import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';

const { Header, Sider, Content } = Layout;

const Home: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'nav 1',
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
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    );
};

export default Home;
```

### 2、在首页路由跳转

在路由表@/router/routes

```
// import Home from '../views/Home.tsx'
// import About from '../views/About.tsx'
import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'



const Home = lazy(() => import('../views/Home.tsx'))
const Page1 = lazy(() => import('../views/page1.tsx'))
const Page2 = lazy(() => import('../views/page2.tsx'))
const Page3 = lazy(() => import('../views/page3.tsx'))

const WithLoadingComponent = (component: JSX.Element) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        {component}
    </React.Suspense>
)

const Routes = [
    {
        path: '/',
        element: <Navigate to="/page1" />
    },
    {
        path: '/',
        element: WithLoadingComponent(<Home />),
        children: [
            {
                path: '/page1',
                element: WithLoadingComponent(<Page1 />)
            },
            {
                path: '/page2',
                element: WithLoadingComponent(<Page2 />)
            },
            {
                path: '/page3',
                element: WithLoadingComponent(<Page3 />)
            },
        ]
    },
    {
        path: 'user',
        element: WithLoadingComponent(<Home />),
    }
    

]

export default Routes
```

在@/view/Home.tsx中的Menu组件的item属性上配置路由跳转

```
 <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    onClick={handleClick}
                    items={[
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
                        },
                    ]}
                />
```

**注意要在展示区域使用路由占位组件<Outlet/>（记得从react-router-dom中引入）**

这里是Content中使用

```
  <Content className={styles.homeContent}>
                    Content
                    <Outlet/>
                </Content>
```

