import {Input} from './style'

export function InputLogin({refProps, placeholder, type, change}){
  return <Input ref={refProps} placeholder={placeholder} type={type} onChange={change}/>
}
