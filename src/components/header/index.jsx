import { ContainerHeader, Email, TotalDispence } from "./style";

export function Header(){
  return (
    <ContainerHeader>
      <TotalDispence>Total de despensas: 0 BRL</TotalDispence>
      <Email>email@gmail.com</Email>
    </ContainerHeader>
  );
}
