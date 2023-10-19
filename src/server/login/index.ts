import axios from 'axios';
import {LoginFormType} from '../reqType'
import { resType } from '../resType';
import { notification } from 'antd';

enum User_PATH{
    LOGIN = 'api/user/login',
    REGISTER = 'api/user/register',
    LOGOUT = 'api/user/logout',
}



export const toLogin = async (values: LoginFormType):Promise<resType> => {
    try {
        const res = await axios.post(User_PATH.LOGIN, values);
        return res.data;
    } catch (error:any) {
        notification.error({
            message: '登录失败',
            description: error.message,
        });
        return Promise.reject(error);
    }

}
export const toRegister = async (values: LoginFormType):Promise<resType> => {
    return await axios.post(User_PATH.REGISTER, values);
}
export const toLogout = async ():Promise<resType> => {
    return await axios.post(User_PATH.LOGOUT);
}

