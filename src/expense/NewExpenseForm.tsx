import { format } from 'date-fns';

import {
  Button,
  DatePicker,
  NumberInput,
  Select,
  SelectItem,
  TextInput,
  Title,
} from '@tremor/react';
import { CurrencyDollarIcon } from '@heroicons/react/solid';
import { useNewExpense } from './useNewExpense';
import { ExpenseCategory } from './expenseCategory';

export const NewExpenseForm = () => {
  const { expense, loading, disabled, changeHandler, submitExpense } = useNewExpense();

  const onClickAddExpense = () => {
    submitExpense();
  };
  return (
    <>
      <Title className='mt-3'>New Expense</Title>
      <TextInput
        value={expense.title}
        className="mt-3"
        placeholder="Type"
        onChange={(event) => changeHandler({ title: event.target.value })}
      />
      <NumberInput
        value={expense.amount}
        className="mt-1"
        icon={CurrencyDollarIcon}
        placeholder="00.00"
        enableStepper={false}
        onChange={(event) => changeHandler({ amount: event.target.value })}
      />
      <Select
        value={expense.category}
        className="mt-1"
        defaultValue={expense.category}
        enableClear={false}
        onValueChange={(event) => changeHandler({ category: event })}
      >
        {Object.values(ExpenseCategory).map((category) => (
          <SelectItem key={category} value={category}>
            {category}
          </SelectItem>
        ))}
      </Select>
      <DatePicker
        value={new Date(expense.date)}
        className="mt-1"
        enableClear={false}
        onValueChange={(event) =>
          changeHandler({
            date: format(new Date(event!.toString()), 'MM/dd/yyyy'),
          })
        }
      />
      <Button
        className="mt-3"
        style={{ width: '100%' }}
        color='emerald'
        disabled={disabled}
        loading={loading}
        onClick={onClickAddExpense}
      >
        Add Expense
      </Button>
    </>
  );
};
