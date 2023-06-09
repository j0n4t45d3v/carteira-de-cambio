import { useContext } from "react";
import { ContainerHeader, Email, TotalDispence } from "./style";
import { UserContext } from "../../context/user";
import { useNavigate } from "react-router-dom";

export function Header(){
  const { user } = useContext(UserContext);
  const navigate = useNavigate()

  if(user.email === undefined || user.email === null){
    return navigate('/')
  }
  return (
    <ContainerHeader>
      <TotalDispence>Total de despensas: 0 BRL</TotalDispence>
      <Email>{user.email}</Email>
    </ContainerHeader>
  );
}
