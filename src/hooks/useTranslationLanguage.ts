import LocalesCommon,{LocalLanguage} from "../../public/locales/LocalesCommon";
import { useLanguage } from "../state/setting";

export default function useTranslationLanguage(){
  const language:LocalLanguage = useLanguage()
  let languageJson:any = LocalesCommon[language]
  if(!languageJson){
    languageJson = LocalesCommon[LocalLanguage.CN]
  }
  function t(key:string){
    return languageJson[key]
  }
  return {
    t,
    language
  }
}