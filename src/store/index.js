import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../store/slices/userSlices'

const store = configureStore({reducer:{userInfo: userReducer}})

export default store