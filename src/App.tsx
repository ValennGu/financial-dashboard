import { Toaster } from 'react-hot-toast';
import './App.css'
import { SavingsLineChart } from './savings/SavingsLineChart';
import { Grid, Col, Tab, TabGroup, TabList, TabPanel, TabPanels, Divider } from '@tremor/react';
import { NewExpenseForm } from './expense/NewExpenseForm';
import { TrendingUpIcon, DocumentReportIcon } from '@heroicons/react/outline';
import { ExpensesList } from './expense/ExpensesList';

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Grid numItems={5} className="gap-2 mt-2 mr-4 ml-4">
        <Col numColSpanLg={1} numColSpan={0}/>
        <Col numColSpanLg={3} numColSpan={5}>
          <TabGroup>
            <TabList color='emerald'>
              <Tab icon={DocumentReportIcon}>Expenses</Tab>
              <Tab icon={TrendingUpIcon}>Statistics</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <NewExpenseForm />
                <Divider />
                <ExpensesList />
              </TabPanel>
              <TabPanel>
                <SavingsLineChart year="2023"/>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </Col>
        <Col numColSpanLg={1} numColSpan={0}/>
      </Grid>
    </>
  );
}

export default App
