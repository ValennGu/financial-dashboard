import { List, ListItem, Text, Subtitle, Flex } from "@tremor/react";
import { useExpenses } from "./useExpenses";

export const ExpensesList = () => {
  const { expenses } = useExpenses('2023', 'december');

  return (
    <>
      <List className="mt-2">
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