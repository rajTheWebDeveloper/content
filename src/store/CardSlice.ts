import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialStateType } from "../interfaces";
import axios from 'axios'



let initialState:InitialStateType={
    FETCH_CARDS_LOADING:false,
    FETCH_CARDS_SUCCESS:false,
    FETCH_CARDS_ERROR:false,
    Cards:[]
}

let fetchCards=createAsyncThunk('card/fetchCards',async ()=>
{
    try 
    {
        let response=await axios.get('https://www.reddit.com/r/reactjs.json')
        let cardData=response.data.data.children
        cardData=cardData.map((items:any)=>
        {
            let {data}=items
            let {title,selftext_html,url,score}=data
            return {Title:title,SelfText_HTML:selftext_html,URL:url,score:score}
        })

        if(response.data)
        {
            return cardData
        }
        else 
        {
            throw new Error("Something went wrong")
        }
    }
    catch(error)
    {

    }
})


let CardSlice=createSlice({
    name:"card",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>
    {
        builder
        .addCase(fetchCards.pending,(state)=>
        {
            state.FETCH_CARDS_LOADING=true 
            state.FETCH_CARDS_SUCCESS=false
        })
        .addCase(fetchCards.fulfilled,(state,action)=>
        {
            state.FETCH_CARDS_LOADING=false 
            state.FETCH_CARDS_SUCCESS=true
            state.Cards=action.payload
        })
        .addCase(fetchCards.rejected,(state)=>
        {
            state.FETCH_CARDS_LOADING=false 
            state.FETCH_CARDS_SUCCESS=false
            state.FETCH_CARDS_ERROR=true
        })
    }
})



export default CardSlice.reducer
export {fetchCards}