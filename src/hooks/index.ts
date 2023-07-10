import { useLanguage } from "../state/setting";
import {useState} from "react";

export function useOtherLanguage() {
    const lan = useLanguage();
    return !(["CN", "EN"].includes(lan))
}
export function useCNLanguage() {
    const lan = useLanguage();
    return (["CN"].includes(lan))
}
export function useTab(){
    const [tabIndex,setTabIndex] = useState(0)
    return {
        tabIndex,
        setTabIndex
    }
}
