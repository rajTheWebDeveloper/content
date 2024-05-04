export interface CardType
{
    Title:string 
    SelfText_HTML:string
    URL:string
    score:number
}


export interface InitialStateType
{
    FETCH_CARDS_LOADING:boolean
    FETCH_CARDS_SUCCESS:boolean
    FETCH_CARDS_ERROR:boolean
    Cards:CardType[]
}

