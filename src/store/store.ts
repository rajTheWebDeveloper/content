import {configureStore} from '@reduxjs/toolkit'
import CardSlice from './CardSlice'

let store=configureStore({
    reducer:{
        Cards:CardSlice
    }
})

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch

export default store