import { Toaster } from 'react-hot-toast';
import { SavingsLineChart } from './savings/SavingsLineChart';
import { Grid, Col, Tab, TabGroup, TabList, TabPanel, TabPanels } from '@tremor/react';
import { NewExpenseForm } from './expense/NewExpenseForm';
import { TrendingUpIcon, DocumentReportIcon, PlusCircleIcon } from '@heroicons/react/outline';
import { ExpensesReport } from './expense/ExpensesReport';
import './App.css'

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
              <Tab icon={DocumentReportIcon}>Report</Tab>
              <Tab icon={PlusCircleIcon}>Create</Tab>
              <Tab icon={TrendingUpIcon}>Savings</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <ExpensesReport />
              </TabPanel>
              <TabPanel>
                <NewExpenseForm />
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
