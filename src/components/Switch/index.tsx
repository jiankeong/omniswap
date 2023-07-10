import ImageCommon from "../../../public/images/ImageCommon";
import Image from "next/image";
import { useState } from "react";


export const Switch = ({on=false}:{on?:boolean})=>{
  const [isOn,setIsOn] = useState(on)
  function onSwitch(){
    setIsOn(!isOn)
  }
  return <Image
  src={isOn ? ImageCommon.switch_on : ImageCommon.switch_off}
  width={57}
  height={43}
  onClick={onSwitch}
  />
}
