import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/header';
import { WalletContext } from '../../context/wallet';
import {
  Button,
  Container,
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

export function Home() {
  const array = [1, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5];
  const { wallet, pushExpense, moneyUsed } = useContext(WalletContext);
  const navigate = useNavigate();

  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [despenseCategory, setDespenseCategory] = useState('');
  const [payment, setPayment] = useState('');
  const [money, setMoney] = useState('');

  function addExpense() {
    const expense = {
      description,
      value,
      despenseCategory,
      payment,
      money,
    };
    pushExpense(expense);
    alert('Despesa adicionada com sucesso')
  }

  return (
    <MainContainer>
      <Header />
      <Container>
        <ContainerConvert>
          <ContainerSeparate>
            <Inputs
              placeholder="Descricão da despesa"
              onChange={(e) => setDescription(e.target.value)}
            />
            <Inputs
              type="number"
              placeholder="Valor"
              onChange={(e) => setValue(e.target.value)}
            />
            <ContainerInputs>
              <label htmlFor="">Categoria de despesa </label>
              <Select onChange={(e) => setDespenseCategory(e.target.value)}>
                <option value="">selecione</option>
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
              <Select onChange={(e) => setPayment(e.target.value)}>
                <option value="">selecione</option>
                <option value="Dinheiro">Dinheiro</option>
                <option value="CartãoDeCredito">Cartão de Credito</option>
                <option value="CartãoDeDebito">Cartão de Debito</option>
              </Select>
            </ContainerInputs>
            <ContainerInputs>
              <label htmlFor="">Moeda </label>
              <Select onChange={(e) => setMoney(e.target.value)}>
                <option value="">selecione</option>
                {wallet.currencies !== undefined
                  ? wallet.currencies.map((item) => {
                      return (
                        <option key={item.code} value={item.code}>
                          {item.code}
                        </option>
                      );
                    })
                  : null}
              </Select>
            </ContainerInputs>
          </ContainerSeparate>
          <Button onClick={addExpense}>Adicionar despesa</Button>
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
                <td>Valor convertido</td>
                <td>
                  Moeda de
                  <br /> conversão
                </td>
                <td>Editar/Excluir</td>
              </tr>
            </TableHeader>
            <TableBody>
              {wallet.expenses?.length > 0 ? (
                wallet.expenses.map((item) => {
                  const valueMoneyUsed = moneyUsed(item.money);
                  const convertedValue = valueMoneyUsed * Number(item.value).toFixed(2);
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <tr>
                      <td>{item.description}</td>
                      <td>{item.despenseCategory}</td>
                      <td>{item.payment}</td>
                      <td>{item.value}</td>
                      <td>{item.money}</td>
                      <td>{valueMoneyUsed}</td>
                      <td>{convertedValue.toFixed(2)}</td>
                      <td>Real</td>
                      <td>
                        <EditIcon onClick={() => alert('editado')} />{' '}
                        <ExcludeIcon onClick={() => alert('excluido')} />
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="9">Nenhuma despesa cadastrada</td>
                </tr>
              )}
            </TableBody>
          </Table>
        </ContainerList>
      </Container>
    </MainContainer>
  );
}
