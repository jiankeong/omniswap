import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";
import { LocalLanguage } from "../../../public/locales/LocalesCommon";
import {AppState} from "../index";

export interface SettingState {
  language:LocalLanguage,
  slippage:string,
  deadlineTime:string
}
export const slippageDefault = '1.0'
export const deadlineDefault = '20'

const initialState:SettingState = {
  language:LocalLanguage.EN,
  slippage:slippageDefault,
  deadlineTime:deadlineDefault
}
export function useLanguage(): LocalLanguage {
  return useSelector((state: AppState) => state.setting.language)
}
export function useSlippage(): string {
  return useSelector((state: AppState) => state.setting.slippage)
}
export function useDeadline(): string {
  return useSelector((state: AppState) => state.setting.deadlineTime)
}
export const settingSlice = createSlice({
    name:"setting",
    initialState,
    reducers:{
      changeLangugae:(state,action:PayloadAction<LocalLanguage>)=>{
        state.language = action.payload
      },
      changeSlippage:(state,action:PayloadAction<string>)=>{
        state.slippage = action.payload
      },
      changeDeadline:(state,action:PayloadAction<string>)=>{
        state.deadlineTime = action.payload
      }
    }
})
export const {changeLangugae,changeSlippage,changeDeadline} = settingSlice.actions

export default settingSlice.reducer
