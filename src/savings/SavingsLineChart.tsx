import { AreaChart, Title } from "@tremor/react";
import { useSavings } from "./useSavings";

const valueFormatter = function(number: number) {
  return new Intl.NumberFormat("us").format(number).toString() + " €";
};

interface Props {
  year: string;
}

export const SavingsLineChart = ({ year }: Props) => {
  const { savings } = useSavings(year);

  const chartData = savings.map((el) => {
    return {
      date: el.month.slice(0, 1).toUpperCase() + el.month.slice(1, 3) + " " + year.slice(2, 4),
      Savings: el.amount,
    }
  })
  
  return (
    <>
      <Title className="mt-3">Savings per month on {year}</Title>
      <AreaChart
        className="h-72 mt-3"
        data={chartData}
        index="date"
        categories={["Savings"]}
        colors={["green"]}
        valueFormatter={valueFormatter}
        showAnimation={true}
      />
    </>
  );
}