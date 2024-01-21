//'Store' acts as a global variable.
//how to create 'store':--

import {configureStore} from '@reduxjs/toolkit'

//'store' needs knowledge about every reducers that are going to use.
import todoSlice from './Todo/todoSlice';

export const store=configureStore({//It takes object
    reducer:todoSlice
});