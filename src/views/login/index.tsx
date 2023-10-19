import React, { createContext, useEffect, useRef } from 'react';
import LoginForm from './loginForm';
import Register from './register'
import lbackground from '@/assets/images/bgimgs/login.jpg';
import rbackground from '@/assets/images/bgimgs/register.jpg';
import 'animate.css';
import { Alert, Carousel } from 'antd';
import styled from 'styled-components';
import { useRequest } from 'ahooks';
import { toLogin } from '../../server/login';
import { LoginFormType } from '../../server/reqType';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';



export const MyContext = createContext({ loginOrRegister: true ,setLoginOrRegister: (value:boolean) => {} });

const Login: React.FC = (props:any) => {
    const [loginOrRegister, setLoginOrRegister] = React.useState(true);
    const [successLogin, setSuccessLogin] = React.useState(false);
    const navigate = useNavigate();
    const backRef = useRef(null);
    const { data, run } = useRequest(toLogin, {
        manual: true,
        onSuccess: (data: any) => {
            if (data.data.code !== 200) {
                setSuccessLogin(true)
                return
            }
            sessionStorage.setItem('userToken', JSON.stringify(data?.data))
            navigate('/page1')
        },
    })
    const onFinish = (values: LoginFormType) => {
        run(values)
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const OnLogin = () => {
        return (<>
            <LoginPage>
                {successLogin && <Alert
                    closable
                    showIcon
                    description={data?.data?.message}
                    type={data?.data?.code === 200 ? "success" : "error"}
                    style={{ position: "absolute", top: "10px", right: "10px" }}
                />}
                <LoginForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
            </LoginPage>
        </>)
    }
    const OnRegister = () => {
        return (<>
            <RegisterPage>
                <Register />
            </RegisterPage>
        </>)
    }
    const changePageState = (from: number, to: number) => {
        if (from ===0 && to === 1) {
            props.changeLoginState(false)
        }else{
            props.changeLoginState(true)
        }
    }
    return (
        <div style={{ background: `${lbackground}` }}>
            <MyContext.Provider value={{ loginOrRegister, setLoginOrRegister }} >
                <Carousel ref={backRef} beforeChange={changePageState}>
                    <div key={1}>
                        <OnLogin />
                    </div>
                    <div key={2}>
                        <OnRegister />
                    </div>
                </Carousel>
            </MyContext.Provider>
        </div>
    );
}

const LoginPage = styled.div`
width: 100vw;
height: 100vh;
background-image: url(${lbackground});
background-size: 100vw 100vh;
display: flex;
justify-content: center;
align-items: center;
transition: all 1s ease;
`
const RegisterPage = styled.div`
width: 100vw;
height: 100vh;
background-image: url(${rbackground});
background-size: 100vw 100vh;
display: flex;
justify-content: center;
align-items: center;
`
const mapDispatchToProps = (dispatch:any) => {
    return{
        changeLoginState: (value:boolean) => {
            dispatch({type:'loginState',loginState:value})
        }
    }
} ;


export default connect(null,mapDispatchToProps)(Login);