import { useContext, useRef, useState } from 'react';
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

  const descriptionRef = useRef('');
  const valueRef = useRef('');
  const despenseCategoryRef = useRef('');
  const paymentRef = useRef('');
  const moneyRef = useRef('');

  const [edit, setEdit] = useState(false);
  const [modal, setModal] = useState(false);

  function cleanFields() {
    descriptionRef.current.value = '';
    valueRef.current.value = '';
    despenseCategoryRef.current.value = '';
    paymentRef.current.value = '';
    moneyRef.current.value = '';
  }

  function addExpense() {
    const expense = {
      description: descriptionRef.current.value,
      value: valueRef.current.value,
      despenseCategory: despenseCategoryRef.current.value,
      payment: paymentRef.current.value,
      money: moneyRef.current.value,
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
    cleanFields();
    timeModal();
  }

  function timeModal() {
    setModal(true);

    setTimeout(() => {
      setModal(false);
    }, 900);
  }

  return (
    <MainContainer>
      <Header />
      <Container>
        <ContainerConvert>
          <ContainerSeparate>
            <Inputs placeholder="Descricão da despesa" ref={descriptionRef} />
            <Inputs type="number" placeholder="Valor" ref={valueRef} />

            <ContainerInputs>
              <Label htmlFor="">Categoria de despesa</Label>
              <Select ref={despenseCategoryRef}>
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
              <Select ref={paymentRef}>
                <option value="">selecione</option>
                <option value="Dinheiro">Dinheiro</option>
                <option value="CartãoDeCredito">Cartão de Credito</option>
                <option value="CartãoDeDebito">Cartão de Debito</option>
              </Select>
            </ContainerInputs>
            <ContainerInputs>
              <Label htmlFor="">Moeda </Label>
              <Select ref={moneyRef}>
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

          {edit ? (
            <Button onClick={() => setEdit(false)}>Editar despesa</Button>
          ) : (
            <Button onClick={addExpense}>Adicionar despesa</Button>
          )}
        </ContainerConvert>
        <ContainerList>
          <Table>
            <TbHeader />
            <TbBody edit={setEdit} />
          </Table>
        </ContainerList>
        {modal ? <Modal text={'Despesa adicionada com sucesso'} /> : null}
      </Container>
    </MainContainer>
  );
}
