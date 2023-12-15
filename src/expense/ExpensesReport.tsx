import { Flex, Metric, Subtitle } from "@tremor/react";
import { ExpensesMetrics } from "./ExpensesMetrics";
import { useExpenses } from "./useExpenses";
import { ExpensesList } from "./ExpensesList";

export const ExpensesReport = () => {
  const { expenses } = useExpenses('2023', 'december');

  const total = expenses
    .reduce((acc, curr) => acc + Number(curr.amount), 0)
    .toFixed(2);

  return (
    <>
      <Flex justifyContent="center" className="mt-6" flexDirection="col">
        <Metric color="emerald">{total} €</Metric>
        <Subtitle>December, 2023</Subtitle>
      </Flex>
      <ExpensesMetrics expenses={expenses}/>
      <ExpensesList expenses={expenses}/>
    </>
  )
}