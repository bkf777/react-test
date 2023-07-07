import { Button } from 'antd';
import { Outlet,useNavigate,useRoutes } from 'react-router-dom';
import Routes from './router/routes.tsx';
function App() {
  const navigator = useNavigate();
  const element = useRoutes(Routes);
  return (
    <>
      {/* <h1>Hello, world!</h1>
      <Button type="primary" onClick={()=>{navigator('/home')}}>go to Home</Button>
      <Button type="primary" onClick={()=>{navigator('/about')}}>go to About</Button>
      <hr /> */}
      {/* 一般方法注册路由的占位组件*/}
      {/* <Outlet /> */}
      {/* 路由表方法注册路由的占位组件 */}
      {element}
    </>
  )
}

export default App
