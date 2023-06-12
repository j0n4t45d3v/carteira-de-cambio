import { useContext } from 'react';
import { WalletContext } from '../../context/wallet';
import { EditIcon, ExcludeIcon } from './style';

export function Row({ item, moneyUsed, convertedValue }) {
  const { removeExpense } = useContext(WalletContext);

  function editExpense(expense) {}

  function deleteExpense(expense) {
    removeExpense(expense);
  }

  return (
    <tr>
      <td>{item.description}</td>
      <td>{item.despenseCategory}</td>
      <td>{item.payment}</td>
      <td>{item.value}</td>
      <td>{item.money}</td>
      <td>{moneyUsed}</td>
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
}
