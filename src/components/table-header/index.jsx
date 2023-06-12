import { TableHeader } from "./style";

export function TbHeader() {
  return (
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
  );
}
