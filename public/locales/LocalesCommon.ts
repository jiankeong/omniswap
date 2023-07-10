import enJson from './en/common.json'
import cnJson from './cn/common.json'
import cntwJson from './cntw/common.json'
import jaJson from './ja/common.json'
import ruJson from './ru/common.json'
import korJson from './KOR/common.json'
import vieJson from './vie/common.json'
import indianJson from './indian/common.json'
import malJson from './mal/common.json'
import thaiJson from './thai/common.json'
import araJson from './ara/common.json'
import gerJson from './ger/common.json'
import benJson from './ben/common.json'
import indonJson from './indon/common.json'

import frJson from './fr/common.json'
import poJson from './po/common.json'
import spJson from './sp/common.json'

export enum LocalLanguage {
  EN='en',      // 英语
  CN='zh-cn',   // 简体中文
  CNTW='zh-tw', // 繁体中文
  JA='ja',      // 日语
  RU='ru',      // 俄语
  KOR='ko',     // 韩语
  VIE='vi',     // 越南语
  INDIAN='hi',  // 印度语（印地语）
  MAL='ms',     // 马来语
  THAI='th',    // 泰语
  ARA='ar',     // 阿拉伯
  GER='de',     // 德语
  BEN='bd',     // 孟加拉语
  INDON='id',   // 印尼语
  SP='sp',      // 西班牙
  PO='po',      // 葡萄牙
  FR='fr',      // 法语
}
const LocalesCommon = {
  [LocalLanguage.EN]:enJson,
  [LocalLanguage.CN]:cnJson,
  [LocalLanguage.CNTW]:cntwJson,
  [LocalLanguage.JA]:jaJson,
  [LocalLanguage.RU]:ruJson,
  [LocalLanguage.KOR]:korJson,
  [LocalLanguage.VIE]:vieJson,
  [LocalLanguage.INDIAN]:indianJson,
  [LocalLanguage.MAL]:malJson,
  [LocalLanguage.THAI]:thaiJson,
  [LocalLanguage.ARA]:araJson,
  [LocalLanguage.GER]:gerJson,
  [LocalLanguage.BEN]:benJson,
  [LocalLanguage.INDON]:indonJson,
  [LocalLanguage.SP]:spJson,
  [LocalLanguage.PO]:poJson,
  [LocalLanguage.FR]:frJson
}
export default LocalesCommon