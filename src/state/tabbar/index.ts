import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";
import {AppState} from "../index";
export interface TabbarState {
    tabIndex:number,
}

const initialState:TabbarState = {
  tabIndex:0,
}
export function useTabIndex(): number {
    return useSelector((state: AppState) => state.tabbar.tabIndex)
}
export const settingSlice = createSlice({
    name:"setting",
    initialState,
    reducers:{
        changeTabIndex:(state,action:PayloadAction<TabbarState>)=>{
            // console.log(action)
            state.tabIndex = action.payload.tabIndex
        },
    }
})
export const {changeTabIndex} = settingSlice.actions


export default settingSlice.reducer
