import { useContext } from "react";
import { ContainerHeader, Email, TotalDispence } from "./style";
import { UserContext } from "../../context";

export function Header(){
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <ContainerHeader>
      <TotalDispence>Total de despensas: 0 BRL</TotalDispence>
      <Email>{user.email}</Email>
    </ContainerHeader>
  );
}
