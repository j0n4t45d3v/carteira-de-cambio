import { useContext } from "react";
import { ContainerHeader, Email, TotalDispence } from "./style";
import { UserContext } from "../../context/user";
import { WalletContext} from "../../context/wallet";
import { useNavigate } from "react-router-dom";

export function Header(){
  const { user } = useContext(UserContext);
  const { moneyUsed, expenses } = useContext(WalletContext);
  const navigate = useNavigate()

  function totalDispence(){
    let total = 0;
    expenses?.forEach((expense) => {
      const valueMoneyUsed = moneyUsed(expense.money);
      const convertedValue = valueMoneyUsed * Number(expense.value).toFixed(2);
      total += Number(convertedValue);
    });
    return total.toFixed(2);
  }

  if(user.email === undefined || user.email === null){
    return navigate('/')
  }
  return (
    <ContainerHeader>
      <TotalDispence>Total de despensas: {totalDispence()} BRL</TotalDispence>
      <Email>{user.email}</Email>
    </ContainerHeader>
  );
}
