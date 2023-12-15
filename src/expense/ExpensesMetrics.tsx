import { BarList, Title, ValueFormatter } from "@tremor/react";
import { ExpenseCategory } from "./expenseCategory";
import { Expense } from "./useNewExpense";

interface Props {
  expenses: Expense[];
}

const getAmountForCategory = (expenses: Expense[], category: ExpenseCategory): number => {
  if(!expenses) {
    return 0;
  }
  return expenses
    .filter(expense => expense.category === category)
    .reduce((acc, expense) => acc + Number(expense.amount), 0
  );
}

const valueFormatter: ValueFormatter = (num) => {
  return num.toFixed(2) + ' €';
}

export const ExpensesMetrics = ({ expenses }: Props) => {
  const data = [
    {
      name: ExpenseCategory.Mortgage,
      value: getAmountForCategory(expenses, ExpenseCategory.Mortgage),
      color: 'emerald',
    },
    {
      name: ExpenseCategory.Home,
      value: getAmountForCategory(expenses, ExpenseCategory.Home),
      color: 'emerald'
    },
    {
      name: ExpenseCategory.Groceries,
      value: getAmountForCategory(expenses, ExpenseCategory.Groceries),
      color: 'emerald'
    },
    {
      name: ExpenseCategory.Gas,
      value: getAmountForCategory(expenses, ExpenseCategory.Gas),
      color: 'emerald'
    },
    {
      name: ExpenseCategory.Gym,
      value: getAmountForCategory(expenses, ExpenseCategory.Gym),
      color: 'emerald'
    },
    {
      name: ExpenseCategory.Services,
      value: getAmountForCategory(expenses, ExpenseCategory.Services),
      color: 'emerald'
    },
    {
      name: ExpenseCategory.Extra,
      value: getAmountForCategory(expenses, ExpenseCategory.Extra),
      color: 'emerald'
    },
  ];

  return (
    <>
      <BarList data={data} valueFormatter={valueFormatter} className="mt-2" showAnimation/>
    </>
  )
}