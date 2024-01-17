import {TransactionsTableProps, TrxItem} from "./types.ts";
import {Typography} from "../Typography";
import React, {useMemo} from "react";
import {useTheme} from "styled-components";
import {convertDateToHuman} from "../../common/date.ts";
import * as S from './TransactionsTable.styled.ts';
import {formatNumberWithSpaces} from "../../common/numbers.ts";
import {truncate} from "../../common/string.ts";

const trxColumns = [
  { header: 'Тип', key: 'type', width: '100px' },
  { header: 'Сумма', key: 'amount', width: '100px' },
  { header: 'Дата', key: 'date', width: '100px' },
];

const trxTypeLabelMap: {
  [k in TrxItem['type']]: string;
} = {
  REPLENISH: 'Пополнение',
  WRITE_OFF: 'Списание',
  SUBSCRIPTION: 'Подписка',
  WITHDRAW: 'Вывод'
};

const AmountCell = React.memo(({ trx }: { trx: TrxItem }) => {
  const theme = useTheme();

  if (trx.type === 'REPLENISH') {
    return (
      <Typography
        variant="body-s-medium"
        color={theme.colors.other.green}
      >
        + {trx.amount} {trx.currency}
      </Typography>
    );
  }

  if (trx.type === 'WRITE_OFF') {
    return (
      <Typography
        variant="body-s-medium"
        color={theme.colors.other.critic}
      >
        - {formatNumberWithSpaces(trx.amount, ' ')} {truncate(trx.currency, 24)}
      </Typography>
    );
  }

  return <Typography variant="body-s-medium">-</Typography>
});

const DateCell = React.memo(({ trx }: { trx: TrxItem }) => {
  // const [date, time] = convertDateToHuman(trx.createdAt).split(',');
  const date = useMemo(() => {
    const convertedDate = convertDateToHuman(trx.createdAt);
    if (convertedDate) {
      return convertedDate.split(',')
    }
    return ['-', '-'];
  }, [trx.createdAt]);
  return (
    <S.DateCellText variant="body-s-medium">
      <span>{date[0]},</span>
      <span>{date[1]}</span>
    </S.DateCellText>
  )
});

const TransactionsTable = ({ transactions }: TransactionsTableProps) => {
  const trxData = useMemo(() => {
    return transactions.map((trx) => ({
      type: { value: trxTypeLabelMap[trx.type] || '', raw: trx.type },
      amount: { value: <AmountCell trx={trx} />, raw: `${trx.amount} ${trx.currency}` },
      date: { value: <DateCell trx={trx} />, raw: convertDateToHuman(trx.createdAt) },
    }));
  }, [transactions]);

  return (
    <>
      <S.Title variant="body-xl-semibold">История операций</S.Title>
      <S.STable columns={trxColumns} data={trxData} />
    </>
  );
};

export default TransactionsTable;
