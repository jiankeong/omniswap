import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";
import { LocalLanguage } from "../../../public/locales/LocalesCommon";
import {AppState} from "../index";

export interface SettingState {
  language:LocalLanguage,
  slippage:number,
  deadlineTime:number,
  gasprice:number,
}
export const slippageDefault = 1
export const deadlineDefault = 20

const initialState:SettingState = {
  language:LocalLanguage.EN,
  slippage:slippageDefault,
  deadlineTime:deadlineDefault,
  gasprice:5,
}
export function useGasPrice(): number {
  return useSelector((state: AppState) => state.setting.gasprice)
}
export function useLanguage(): LocalLanguage {
  return useSelector((state: AppState) => state.setting.language)
}
export function useSlippage(): number {
  return useSelector((state: AppState) => state.setting.slippage)
}
export function useDeadline(): number {
  return useSelector((state: AppState) => state.setting.deadlineTime)
}
export const settingSlice = createSlice({
    name:"setting",
    initialState,
    reducers:{
      changeLangugae:(state,action:PayloadAction<LocalLanguage>)=>{
        state.language = action.payload
      },
      changeSlippage:(state,action:PayloadAction<number>)=>{
        state.slippage = action.payload
      },
      changeDeadline:(state,action:PayloadAction<number>)=>{
        state.deadlineTime = action.payload
      },
      changeGasPrice:(state,action:PayloadAction<SettingState>)=>{
        state.gasprice = action.payload.gasprice
      },
    }
})
export const {changeLangugae,changeSlippage,changeDeadline, changeGasPrice} = settingSlice.actions

export default settingSlice.reducer
