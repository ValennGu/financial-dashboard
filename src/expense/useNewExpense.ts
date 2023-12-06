import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { format } from 'date-fns';
import { arrayUnion, collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '../database/firestore';
import uuid from 'react-uuid';

export type Expense = {
  id: string;
  title: string;
  amount: string;
  category: string;
  date: string;
};

const defaultExpense: Expense = {
  id: '',
  amount: '',
  title: '',
  category: 'Home',
  date: format(new Date(), 'MM/dd/yyyy'),
};

export const useNewExpense = () => {
  const [expense, setExpense] = useState<Expense>(defaultExpense);
  const [loading, setLoading] = useState(false);

  const changeHandler = (partialExpense: Partial<Expense>) => {
    setExpense((prev) => ({
      ...prev,
      ...partialExpense,
      id: uuid(),
    }));
  };

  const submitExpense = () => {
    setLoading(true);
    const collectionReference = collection(db, '2023');
    const documentReference = doc(collectionReference, 'december');

    (async () => {
      await updateDoc(documentReference, { expenses: arrayUnion({ ...expense, amount: Number(expense.amount)}) });
    })()
      .then((() => {
        toast.success(`New expense registered successfuly!`);
      })).catch(() => {
        toast.error(`There has been some error while saving the new expense, please try again.`);
      }).finally(() => {
        setExpense(defaultExpense);
        setLoading(false);
      });
  }

  return {
    expense,
    loading,
    submitExpense,
    changeHandler,
  };
};
