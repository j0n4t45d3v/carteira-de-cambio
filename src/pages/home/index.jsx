import { useContext, useState } from 'react';
import { Header } from '../../components/header';
import {
  Button,
  ContainerConvert,
  ContainerInputs,
  ContainerList,
  ContainerSeparate,
  EditIcon,
  ExcludeIcon,
  Inputs,
  MainContainer,
  Select,
  Table,
  TableBody,
  TableHeader,
} from './style';
import { WalletContext } from '../../context/wallet';

export function Home() {
  const array = [1, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5];
  const { wallet } = useContext(WalletContext);

  const [description, setDescription] = useState("") 
  const [value, setValue] = useState("") 
  const [despense, setDespense] = useState("") 
  const [payment, setPayment] = useState("") 
  const [money, setMoney] = useState("") 


  function addExpense(){

  }


  return (
    <MainContainer>
      <Header />
      <ContainerConvert>
        <ContainerSeparate>
          <Inputs placeholder="Descricão da despesa" />
          <Inputs type="number" placeholder="Valor" />
          <ContainerInputs>
            <label htmlFor="">Categoria de despesa </label>
            <Select>
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
              <option value="Trabalho">Trabalho</option>
            </Select>
          </ContainerInputs>
        </ContainerSeparate>
        <ContainerSeparate>
          <ContainerInputs>
            <label htmlFor="">Metodo de pagamento </label>
            <Select>
              <option value="Dinheiro">Dinheiro</option>
              <option value="CartãoDeCredito">Cartão de Credito</option>
              <option value="CartãoDeDebito">Cartão de Debito</option>
            </Select>
          </ContainerInputs>
          <ContainerInputs>
            <label htmlFor="">Moeda </label>
            <Select>
              {wallet.currencies.map((item) => {
              return (<option value={item.code}>{item.code}</option>)
              })}
            </Select>
          </ContainerInputs>
        </ContainerSeparate>
        <Button>Adicionar despesa</Button>
      </ContainerConvert>
      <ContainerList>
        <Table>
          <TableHeader>
            <tr>
              <td>Descrição</td>
              <td>Tag</td>
              <td>
                Método de <br />
                pagamento
              </td>
              <td>Valor</td>
              <td>Moeda</td>
              <td>Câmbio utilizado</td>
              <td>
                Valor convertido
              </td>
              <td>
                Moeda de
                <br /> conversão
              </td>
              <td>Editar/Excluir</td>
            </tr>
          </TableHeader>
          <TableBody>
            {array.map((item) => {
              console.log(wallet);
              return (
                // eslint-disable-next-line react/jsx-key
                <tr>
                  <td>Cinema</td>
                  <td>Lazer</td>
                  <td>Dinheiro</td>
                  <td>40.59</td>
                  <td>Dolar Comercial</td>
                  <td>5.58</td>
                  <td>um valor ai</td>
                  <td>Real</td>
                  <td><EditIcon onClick={() => alert("editado")}/> <ExcludeIcon onClick={() => alert("excluido")}/></td>
                </tr>
              );
            })}
          </TableBody>
        </Table>
      </ContainerList>
    </MainContainer>
  );
}
