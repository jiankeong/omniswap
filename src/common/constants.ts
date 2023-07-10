
import ImageCommon from '../../public/images/ImageCommon';
import { LocalLanguage } from "../../public/locales/LocalesCommon";

export const THE_GRAPH_URL = "https://api.thegraph.com/subgraphs/name/drondin/olympus-protocol-metrics";
export const WALLET_COINS = ["USDT"]

export const EPOCH_INTERVAL = 2200

// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 13.14
export const OHM_DAI_RESERVE_CONTRACT_DECIMALS = 9;


export * from "../networkDetails";


export const header_ZIndex = 1000
export const leftMenu_ZIndex = 1100
export const footer_ZIndex = 1000
export const leftMenu_width = 300

export const blurDataURL='data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='


export interface LanguagesType{
  title:string,
  type:string
}

export const languages:Record<any,LanguagesType> = {
  [LocalLanguage.EN]:{
    title:'English',
    type:'EN'
  },
  [LocalLanguage.JA]:{
    title:'日本語',
    type:'JA'
  },
  [LocalLanguage.RU]:{
    title:'рускі',
    type:'RU'
  },
  [LocalLanguage.KOR]:{
    title:'한국인',
    type:'KO'
  },
  [LocalLanguage.VIE]:{
    title:'Tiếng Việt',
    type:'VI'
  },
  [LocalLanguage.INDIAN]:{
    title:'हिंदी',
    type:'HI'
  },
  [LocalLanguage.MAL]:{
    title:'Melayu',
    type:'MS'
  },
  [LocalLanguage.THAI]:{
    title:'แบบไทย',
    type:'TH'
  },
  [LocalLanguage.ARA]:{
    title:'عربي',
    type:'AR'
  },
  [LocalLanguage.GER]:{
    title:'Deutsch',
    type:'DE'
  },
  [LocalLanguage.BEN]:{
    title:'বাংলা',
    type:'BD'
  },
  [LocalLanguage.INDON]:{
    title:'Indonesia',
    type:'ID'
  },
  [LocalLanguage.SP]:{
    title:'España',
    type:'SP'
  },
  [LocalLanguage.PO]:{
    title:'Portugal',
    type:'PO'
  },
  [LocalLanguage.FR]:{
    title:'Français',
    type:'FR'
  },
  [LocalLanguage.CN]:{
    title:'简体中文',
    type:'ZH-CN'
  },
  [LocalLanguage.CNTW]:{
    title:'繁體中文',
    type:'ZH-TW'
  }
}