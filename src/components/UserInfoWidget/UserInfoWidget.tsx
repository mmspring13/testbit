import * as S from './UserInfoWidget.styled.ts';
import {TransactionChart} from "../TransactionChart";
import {TransactionsTable} from "../TransactionsTable";
import {useGetUserByIdTransactionsQuery, User} from "../../store/gen/user.ts";
import {useMemo} from "react";

export type UserInfoWidgetProps = {
  user?: User | null;
};

const UserInfoWidget = ({
  user,
}: UserInfoWidgetProps) => {
  const userId = user?.id;

  const {
    data: transactions,
    error,
  } = useGetUserByIdTransactionsQuery({ id: userId }, {
    refetchOnMountOrArgChange: true,
    skip: !userId
  });

  const formattedTransactions = useMemo(() => {
    return transactions?.map((trx) => ({
      id: trx.id,
      provider: trx.provider,
      amount: trx.amount,
      currency: trx.currency,
      status: trx.status,
      type: trx.type,
      createdAt: trx.created_at,
    })) || [];
  }, [transactions]);

  const trxListTextError = useMemo(() => {
    if (error) {
      return 'Ошибка при загрузке транзакций'
    }
    return null
  }, [error]);

  return (
    <S.Container>
      <S.Title variant="body-xl-semibold">
        Использование токенов
      </S.Title>
      {trxListTextError && (
        <S.ErrorBlock>{trxListTextError}</S.ErrorBlock>
      )}
      <S.ChartWrapper>
        <TransactionChart transactions={formattedTransactions} />
      </S.ChartWrapper>
      <S.ChartLegend>
        <S.ChartLegendIcon />
        <S.ChartLegendText variant="body-s-medium">{user?.email || ''}</S.ChartLegendText>
      </S.ChartLegend>
      <S.TrxTableWrapper>
        <TransactionsTable transactions={formattedTransactions} />
      </S.TrxTableWrapper>
    </S.Container>
  );
};

export default UserInfoWidget;
