import { List, ListItem, Text, Subtitle, Flex } from "@tremor/react";
import { Expense } from "./useNewExpense";

interface Props {
  expenses: Expense[];
}

export const ExpensesList = ({ expenses }: Props) => {
  return (
    <>
      <List className="mt-6">
        {expenses.map((item) => (
          <ListItem key={item.id}>
            <Flex justifyContent="start">
              <Subtitle>{item.title}</Subtitle>
            </Flex>
            <Text>{Number(item.amount).toFixed(2)} €</Text>
          </ListItem>
        ))}
      </List>
    </>
  )
}