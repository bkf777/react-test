import React, { useContext, useEffect } from 'react';
import { Switch } from 'antd';
import styled from 'styled-components';
import { MyContext } from './index';

interface MyComponentProps {
    // 在这里定义您的组件特定的属性
    
}


const Title: React.FC<MyComponentProps> = () => {
    const { loginOrRegister, setLoginOrRegister } = useContext(MyContext);
    const handleChange = (checked: boolean) => {
        setLoginOrRegister(checked);
        // getChildChecked(checked);
    };
    return (
        <LoginPage>
            {loginOrRegister ? <div className="title">Welcome to the LOGIN</div> : <div className="title">Please REGISTER first</div>}
            <Switch  checkedChildren="LOGIN" unCheckedChildren="REGISTER" onClick={handleChange} className='switch' checked={loginOrRegister} />
        </LoginPage>)

}

const LoginPage = styled.div`
    display: flex;
    justify-content: space-between;
    .title{
        font-size: 30px;
    }
    .switch{
        margin-top: 20px;
    }
    `;

export default Title;


