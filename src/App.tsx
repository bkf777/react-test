import { Button } from 'antd';
import { Navigate, Outlet, useLocation, useNavigate, useRoutes } from 'react-router-dom';
import Routes from './router/routes.tsx';
import { useEffect } from 'react';
import styled from 'styled-components';
function App() {
  const navigator = useNavigate();

  return (
    <View>
      {/* <h1>Hello, world!</h1>
      <Button type="primary" onClick={()=>{navigator('/home')}}>go to Home</Button>
      <Button type="primary" onClick={()=>{navigator('/about')}}>go to About</Button>
      <hr /> */}
      {/* 一般方法注册路由的占位组件*/}
      {/* <Outlet /> */}
      {/* 路由表方法注册路由的占位组件 */}
      <BeforeRouterEnter />
    </View>
  )
}
const ToLogin = () => {
  const navigator = useNavigate();
  useEffect(() => {
    navigator('/login')
  }, [])
  return <div/> 
}
const ToPage = () => {
  const navigator = useNavigate();
  useEffect(() => {
    navigator('/page1')
  }, [])
  return <div/> 
}
const BeforeRouterEnter = () => {
  const element = useRoutes(Routes);
  const location = useLocation();
  let ifLogin = sessionStorage.getItem('userToken');
  if (ifLogin && location.pathname === '/login') {
    return <ToPage />
  } 
  else if (!ifLogin && location.pathname !== '/login') {
    return <ToLogin />
  }
  return element;
};

const View = styled.div`
  width: 100%;
  height: 100%;
`;

export default App
