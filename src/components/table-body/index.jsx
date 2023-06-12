import { useContext } from 'react';
import { WalletContext } from '../../context/wallet';
import { Row } from '../table-row';
import { TableBody } from './style';

export function TbBody({ edit, occupyFields }) {
  const { wallet, moneyUsed } = useContext(WalletContext);

  return (
    <TableBody>
      {wallet.expenses?.length > 0 ? (
        wallet.expenses.map((item) => {
          const valueMoneyUsed = moneyUsed(item.money);
          const convertedValue =
            valueMoneyUsed * Number(item?.value).toFixed(2);

          return (
            <Row
              key={item.id}
              convertedValue={convertedValue}
              item={item}
              moneyUsed={valueMoneyUsed}
              setEdit={edit}
              inputs={occupyFields}
            />
          );
        })
      ) : (
        <tr>
          <td colSpan="9">Nenhuma despesa cadastrada</td>
        </tr>
      )}
    </TableBody>
  );
}
