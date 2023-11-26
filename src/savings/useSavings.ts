import { useEffect, useState } from 'react';
import { collection, doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-hot-toast';
import { db } from '../database/firestore';

interface SavingsDTO {
  data: Savings[];
}

interface Savings {
  month: string;
  amount: number;
}

export const useSavings = (year: string) => {
  const [savings, setSavings] = useState<Savings[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const collectionReference = collection(db, 'savings');
    const documentReference = doc(collectionReference, year);

    (async () => {
      const response = (await getDoc(documentReference)).data() as SavingsDTO;
      return response.data;
    })()
      .then((savings => {
        setSavings(savings);
        toast.success(`${year}'s savings fetched succesfully!`);
      })).catch(() => {
        toast.error(`There has been some error while fetching ${year}'s savings.`);
      }).finally(() => {
        setLoading(false);
      });

  }, [year]);
  
  return { savings, loading };
}