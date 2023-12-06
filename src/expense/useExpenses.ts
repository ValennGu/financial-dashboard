import { useEffect, useState } from 'react';
import { collection, doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-hot-toast';
import { db } from '../database/firestore';
import { Expense } from './useNewExpense';

interface ExpensesDTO {
  expenses: Expense[];
  income: number;
}

export const useExpenses = (year: string, month: string) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const collectionReference = collection(db, year);
    const documentReference = doc(collectionReference, month);

    (async () => {
      const response = (await getDoc(documentReference)).data() as ExpensesDTO;
      return response.expenses;
    })()
      .then((expenses => {
        const ordExpenses = [...expenses].sort(
          (a, b) => new Date(a.date).getDate() - new Date(b.date).getDate(),
        );
        setExpenses(ordExpenses);
      })).catch(() => {
        toast.error(`There has been some error while fetching expenses.`);
      }).finally(() => {
        setLoading(false);
      });

  }, [year, month]);
  
  return { expenses, loading };
}