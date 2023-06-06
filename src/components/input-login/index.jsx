import {Input} from './style'

export function InputLogin({refProps, placeholder, type}){
  return <Input ref={refProps} placeholder={placeholder} type={type}/>
}
