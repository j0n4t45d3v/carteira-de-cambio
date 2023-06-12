import { useContext, useState } from 'react';
import { Header } from '../../components/header';
import { Modal } from '../../components/modal';
import { TbBody } from '../../components/table-body';
import { TbHeader } from '../../components/table-header';
import { WalletContext } from '../../context/wallet';
import {
  Button,
  Container,
  ContainerConvert,
  ContainerInputs,
  ContainerList,
  ContainerSeparate,
  Inputs,
  Label,
  MainContainer,
  Select,
  Table,
} from './style';

export function Home() {
  const { wallet, pushExpense } = useContext(WalletContext);

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
            <TbHeader />
            <TbBody />
          </Table>
        </ContainerList>
        {modal ? <Modal text={'Despesa adicionada com sucesso'} /> : null}
      </Container>
    </MainContainer>
  );
}
