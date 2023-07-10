import { formatUnits, parseUnits } from 'ethers/lib/utils'
import { BigNumber } from 'ethers'
import { DecimalBigNumber } from "../helpers/DecimalBigNumber/DecimalBigNumber";
import { useMedia } from "use-media";
import { isMobile } from 'react-device-detect';
import ImageCommon from '../../public/images/ImageCommon';

export const ERC20_ABI = require("../abiJson/ERC20.json");
export const ERC721_ABI = require("../abiJson/ERC721.json");



export const colors = {
    main: '#BAFF00',
    active: '#ECB91A',
    white: '#fff',
    black_7: 'rgba(0,0,0,0.28)',
    black_4: 'rgba(0,0,0,0.44)',
    tabbar: '#909090'
}


export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
export const DEFAULT_INVITE_ADDRESS = "0x9d254b1E590Da05fC01e37bd7D7e00eE6Ff809F1"


export function bigNumberToBalance(s: BigNumber, decimal = 18): string {
    return formatUnits(s, decimal)
}

// 余额转bignumber
export function balanceToBigNumber(d: string | number, decimals = 18): BigNumber {
    return parseUnits(String(d), decimals)
}

// bignumber转余额
export function formatBalance(s: string | number | undefined, decimals = 4): string {
  if (!s){
    return "0"
  }
  const init = 0;
  if (isNaN(Number(s))) {
      return floorFixed(init, decimals).toString()
  }
  return s ? floorFixed(s, decimals).toString() : floorFixed(init, decimals).toString()
}

export function floorFixed(s: string | number, decimals = 4) {
    s = Number(s)
    return Math.floor(s * Math.pow(10, decimals)) / Math.pow(10, decimals)
}

export function formatPercent(s: string | number, decimals = 2): string {
    if (Number(s) / 100 > 999999) {
        return '999999%'
    }
    return s ? (Number(s) * 100).toFixed(decimals) + '%' : '0%'
}


export const config = {
    refreshInterval: 1000 * 20,
    longRefreshInterval: 1000 * 60 * 10,
    shortRefreshInterval: 1000 * 60 * 1
}

export enum ChainId {
    esc = 20,
    elatest = 21,
    heco = 128,
    hecotest = 256,
    bsc = 56,
    local = 1337,
    polygon = 137
}

// chainId
export const chainIdConfig: any = {
    [ChainId.esc]: "esc",
    [ChainId.elatest]: "elatest",
    [ChainId.heco]: "heco",
    [ChainId.hecotest]: "hecotest",
    [ChainId.bsc]: "bsc",
    [ChainId.local]: "local",
    [ChainId.polygon]: "polygon",
}

export enum ApprovalState {
    UNKNOWN,
    NOT_APPROVED,
    PENDING,
    APPROVED
}

export function formatAccount(account: string | undefined, decimals = 4) {
    if (!account) {
        return ""
    }
    if (account == ZERO_ADDRESS) {
        return ""
    }
    return account.slice(0, decimals) + '****' + account.slice(-decimals);
}


export function getDeadLine(min = 20) {
    return "0x" + (Math.floor(new Date().getTime() / 1000) + min * 60).toString(16)
}


export function timeToH_M_S(time: number) {
    const check = (num: number) => {
        if (num < 10) {
            return '0' + num
        }
        return num
    }
    let min = Math.floor(time % 3600);
    return check(Math.floor(time / 3600)) + ':' + check(Math.floor(min / 60)) + ':' + check(time % 60)
}


export function enableNetwork(chainId: number) {
    if (chainId === ChainId.hecotest || chainId === ChainId.bsc) {
        return true
    }
    return false
}

export const GasInfo = {
    gasLimit: 1500000
}

export function autoWidthVW(width: number) {
    if (isMobile) {
        // return width+"px"
        return width / 375 * 100 + "vw"
    }
    return width/1920*1440 + 'px'
    // return width/1440*1440 + 'px'
    // return width / 1920 * 100 + "vw"
}


export const isDev = process.env.NODE_ENV === "development"

export function trim(number = 0, precision = 0) {
    // why would number ever be undefined??? what are we trimming?
    const array = Number(number).toFixed(8).split(".");
    if (array.length === 1) return number.toString();
    if (precision === 0) return array[0].toString();

    const poppedNumber = array.pop() || "0";
    array.push(poppedNumber.substring(0, precision));
    const trimmedNumber = array.join(".");
    return trimmedNumber;
}
export const DECIMAL_PLACES_SHOWN = 4;

export const hasVisibleBalance = (balance?: DecimalBigNumber) =>
    balance && balance.toApproxNumber() > 9 / Math.pow(10, DECIMAL_PLACES_SHOWN + 1);

export const formatBalanceNew = (balance?: DecimalBigNumber) =>
    balance?.toString({ decimals: DECIMAL_PLACES_SHOWN, trim: false, format: true });

export function useMeida768() {
    return useMedia({ maxWidth: "768px" })
}

// export function getLanImage(name:string){
//   return i18next.language == 'en' ? (ImageCommon[name+'_en']??ImageCommon[name]) : ImageCommon[name]
// }

// 4位数字   前面自动补0
export function padString(str: string | undefined | number, decimals = 4) {
    if (!str) {
        return ''
    }
    return String(str).padStart(decimals, '0')
}

export function getCardNo(no: string | number) {
    return Number(Number(no) * 999).toString(21).toUpperCase()
}

//函数定义
export function scrollToAnchor(anchorName: string) {
    if (anchorName) {
        let anchorElement = document.getElementById(anchorName);
        if (anchorElement) { anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' }); }
    }
}
export function equalAddress(a:string,b:string){
    return String(a).toUpperCase() === String(b).toUpperCase();
}
export function equalDefaultInviteAddress(a:string){
    return equalAddress(a,DEFAULT_INVITE_ADDRESS);
}
