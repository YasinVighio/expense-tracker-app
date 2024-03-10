import './App.css';
import ExpTrackerHead from './ExpenseTrackerComponents/HeadComponents/ExpTrackerHead';
import ExpTrackerBody from './ExpenseTrackerComponents/BodyComponents/ExpTrackerBody';
import ExpTrackerFoot from './ExpenseTrackerComponents/FootComponents/ExpTrackerFoot';
import RowBreak from './Utility/DesignUtil/RowBreaker';
import {BalanceContext, ExpenseContext, IncomeContext, TransactionsContext } from './ExpenseTrackerComponents/AppData/FinancialData';
import { useState } from 'react';

function App(){

  let balanceState = useState(0);
  let expenseState = useState(0); 
  let incomeState = useState(0);
  let transactionsState = useState([]);

  return(
    <div className='expenseApp'>
      <BalanceContext.Provider value={balanceState}>
      <TransactionsContext.Provider value={transactionsState}>
      <ExpenseContext.Provider value={expenseState}>
      <IncomeContext.Provider value={incomeState}>
        <ExpTrackerHead/>
        <RowBreak/>
        <ExpTrackerBody/>
        <RowBreak/>
        <ExpTrackerFoot/>
        </IncomeContext.Provider>
        </ExpenseContext.Provider>
        </TransactionsContext.Provider>
        </BalanceContext.Provider>
    </div>
  )

}

export default App;
