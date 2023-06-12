import { useContext } from "react";
import { Row } from "../table-row";
import { WalletContext } from "../../context/wallet";
import { TableBody } from "./style";

export function TbBody() {
  const { wallet, moneyUsed } = useContext(WalletContext);

  return (
    <TableBody>
      {wallet.expenses?.length > 0 ? (
        wallet.expenses.map((item, index) => {
          const valueMoneyUsed = moneyUsed(item.money);
          const convertedValue =
            valueMoneyUsed * Number(item?.value).toFixed(2);

          return (
            <Row
              key={index}
              convertedValue={convertedValue}
              item={item}
              moneyUsed={valueMoneyUsed}
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
