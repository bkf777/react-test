import { configureStore } from '@reduxjs/toolkit';
import {reducer} from '../reducers';

const store = configureStore({
    reducer,
  // 可选的其他配置项
});



export default store;
