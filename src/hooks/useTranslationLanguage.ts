import { useCallback } from "react";
import LocalesCommon,{LocalLanguage} from "../../public/locales/LocalesCommon";
import { useLanguage } from "../state/setting";

export default function useTranslationLanguage(){
  const language:LocalLanguage = useLanguage()
  let languageJson:any = LocalesCommon[language]
  if(!languageJson){
    languageJson = LocalesCommon[LocalLanguage.CN]
  }

  const t = useCallback(
    (key:string, params: Record<string, any> = {}) => {
      let value = languageJson[key]
      if (!key || !value) return key
      Object.keys(params).forEach((item:string) => {
        value = value.replace(new RegExp(`{${item}}`, 'g'), params[item])
      })
      return value
    },
    [language]
  )

  return {
    t,
    language
  }
}