import { useContext } from "react";
import { ContainerHeader, Email, TotalDispence } from "./style";
import { UserContext } from "../../context/user";

export function Header(){
  const { user } = useContext(UserContext);
  return (
    <ContainerHeader>
      <TotalDispence>Total de despensas: 0 BRL</TotalDispence>
      <Email>{user.email}</Email>
    </ContainerHeader>
  );
}
