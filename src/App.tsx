import { Button } from 'antd';
import { Navigate, Outlet, useLocation, useNavigate, useRoutes } from 'react-router-dom';
import Routes from './router/routes.tsx';
import { useEffect } from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import  store  from './redux/state';
function App() {

  return (
    <Provider store={store}>
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
    </Provider>
  )
}
const withoutToken = ["/login","/customs"]
const ToLogin = (props:any) => {
  const navigator = useNavigate();
  console.log(props)
  const path = withoutToken.includes(props.pathname)? props.pathname : "/customs"
  useEffect(() => {
    navigator(path)
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
  else if (!ifLogin && !withoutToken.includes(location.pathname)) {
    return <ToLogin pathname={location.pathname} />
  }
  return element;
};

const View = styled.div`
  width: 100%;
  height: 100%;
`;

export default App
