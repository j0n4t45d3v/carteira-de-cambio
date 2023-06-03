import {
    Button,
  ContainerConvert,
  ContainerList,
  Inputs,
  MainContainer,
  Select,
  Table,
  TableBody,
  TableHeader,
} from './style';

export function Home() {
  const array = [1, 2, 3, 4, 5];

  return (
    <MainContainer>
      <ContainerConvert>
        <Inputs placeholder="Descricão da despesa" />
        <Inputs placeholder="Valor" />
        <label htmlFor="">Categoria de despesa </label>
        <Select>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Transporte ">Transporte</option>
          <option value="Saúde">Saúde</option>
          <option value="Trabalho">Trabalho</option>
        </Select>
        <label htmlFor="">Metodo de pagamento </label>
        <Select>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Transporte ">Transporte</option>
          <option value="Saúde">Saúde</option>
          <option value="Trabalho">Trabalho</option>
        </Select>
        <label htmlFor="">Moeda </label>
        <Select>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Transporte ">Transporte</option>
          <option value="Saúde">Saúde</option>
          <option value="Trabalho">Trabalho</option>
        </Select>
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
                Moeda de
                <br /> conversão
              </td>
              <td>Editar/Excluir</td>
            </tr>
          </TableHeader>
          <TableBody>
            {array.map((item) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <tr>
                  <td>a</td>
                  <td>b</td>
                  <td>c</td>
                  <td>a</td>
                  <td>b</td>
                  <td>c</td>
                  <td>b</td>
                  <td>c</td>
                </tr>
              );
            })}
          </TableBody>
        </Table>
      </ContainerList>
    </MainContainer>
  );
}
