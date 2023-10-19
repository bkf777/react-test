import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { MyContext } from './index';
import { connect } from 'react-redux';


// Define an empty interface to be used as the props for the Title component
type MyComponentProps = {
    // 在这里定义您的组件特定的属性

    }



const Title: React.FC<MyComponentProps> = (props:any) => {
    const {loginOrRegister} = props
    return (
        <LoginPage>
            {loginOrRegister ? <div className="title">Welcome to the LOGIN</div> : <div className="title">Please REGISTER first</div>}
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
const mapStateToProps = (state: any) => {
    return {
        loginOrRegister: state.loginOrRegister
    }
}
export default connect(mapStateToProps)(Title);


