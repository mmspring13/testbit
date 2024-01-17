import {Transaction} from "../../store/gen/user.ts";

export type TransactionsTableProps = {
  transactions: TrxItem[];
};

export type TrxItem = {
  id: string;
  provider: string;
  amount: number;
  currency: string;
  status: Transaction['status'];
  type: Transaction['type'];
  createdAt: string;
};
