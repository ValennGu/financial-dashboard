import { Toaster } from 'react-hot-toast';
import './App.css'
import { SavingsLineChart } from './savings/SavingsLineChart';
import { Grid, Col } from '@tremor/react';

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <Grid numItems={5} className="gap-2">
        <Col numColSpan={1} />
        <Col numColSpan={3}>
          <SavingsLineChart year="2023"/>
        </Col>
        <Col numColSpan={1} />
      </Grid>
    </>
  );
}

export default App
