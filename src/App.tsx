import { Toaster } from 'react-hot-toast';
import './App.css'
import { SavingsLineChart } from './savings/SavingsLineChart';
import { Grid, Col } from '@tremor/react';
import { NewExpenseForm } from './expense/NewExpenseForm';

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Grid numItems={5} className="gap-2">
        <Col numColSpanLg={1} numColSpan={0}/>
        <Col numColSpanLg={3} numColSpan={5}>
          <NewExpenseForm />
          <SavingsLineChart year="2023"/>
        </Col>
        <Col numColSpanLg={1} numColSpan={0}/>
      </Grid>
    </>
  );
}

export default App
