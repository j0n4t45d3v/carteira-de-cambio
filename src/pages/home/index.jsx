import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/header';
import { Modal } from '../../components/modal';
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
  Label,
  MainContainer,
  Select,
  Table,
  TableBody,
  TableHeader,
} from './style';

export function Home() {
  const array = [1, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5];
  const { wallet, pushExpense, moneyUsed, removeExpense } = useContext(WalletContext);
  const navigate = useNavigate();

  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [despenseCategory, setDespenseCategory] = useState('');
  const [payment, setPayment] = useState('');
  const [money, setMoney] = useState('');

  const [modal, setModal] = useState(false);

  function addExpense() {
    const expense = {
      description,
      value,
      despenseCategory,
      payment,
      money,
    };

    if (
      !expense.description ||
      !expense.value ||
      !expense.despenseCategory ||
      !expense.payment ||
      !expense.money
    ) {
      return alert('Preencha todos os campos');
    }
    pushExpense(expense);
    timeModal();
  }

  function editExpense(expense) {
  }

  function deleteExpense(expense) {
    removeExpense(expense);
  }

  function timeModal() {
    setModal(true);

    setTimeout(() => {
      setModal(false);
    }, 700);
  }

  return (
    <MainContainer>
      <Header />
      <Container>
        <ContainerConvert>
          <ContainerSeparate>
            {/* <Label htmlFor="">Descrição de despesa</Label> */}
            <Inputs
              placeholder="Descricão da despesa"
              onChange={(e) => setDescription(e.target.value)}
            />

            {/* <Label htmlFor="">Categoria de despesa</Label> */}
            <Inputs
              type="number"
              placeholder="Valor"
              onChange={(e) => setValue(e.target.value)}
            />

            <ContainerInputs>
              <Label htmlFor="">Categoria de despesa</Label>
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
              <Label htmlFor="">Metodo de pagamento</Label>
              <Select onChange={(e) => setPayment(e.target.value)}>
                <option value="">selecione</option>
                <option value="Dinheiro">Dinheiro</option>
                <option value="CartãoDeCredito">Cartão de Credito</option>
                <option value="CartãoDeDebito">Cartão de Debito</option>
              </Select>
            </ContainerInputs>
            <ContainerInputs>
              <Label htmlFor="">Moeda </Label>
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
                  const convertedValue =
                    valueMoneyUsed * Number(item.value).toFixed(2);
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
                      <td
                        style={{
                          display: 'flex',
                          justifyContent: 'space-evenly',
                          alignItems: 'center',
                          cursor: 'default',
                        }}
                      >
                        <EditIcon onClick={() => editExpense(item)} />
                        {' | '}
                        <ExcludeIcon onClick={() => deleteExpense(item)} />
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
        {modal ? <Modal text={"Despesa adicionada com sucesso"} /> : null}
      </Container>
    </MainContainer>
  );
}
