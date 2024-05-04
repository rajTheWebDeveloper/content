import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../store/Hooks'
import EachCard from './EachCard'
import { fetchCards } from '../store/CardSlice'

const Cards = () => {
    let {Cards}=useAppSelector(state=>state.Cards)
    let dispatch=useAppDispatch()

    useEffect(()=>
    {
        dispatch(fetchCards())
    },[])

  return (
    <div className='container'>
        {Cards && Cards.map((items,idx)=>
        {
            return <EachCard key={idx} {...items}/>
        })}
    </div>
  )
}

export default Cards