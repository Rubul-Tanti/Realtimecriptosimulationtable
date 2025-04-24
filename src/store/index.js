import {configureStore} from '@reduxjs/toolkit'
import cryptoReducer from '../services/index'
export const store =configureStore({
  reducer:{
    crypto:cryptoReducer
  }
})
