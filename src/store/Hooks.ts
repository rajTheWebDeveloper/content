import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import { AppDispatch, RootState } from './store'



export let useAppSelector:TypedUseSelectorHook<RootState>=useSelector
export let useAppDispatch=()=>useDispatch<AppDispatch>()