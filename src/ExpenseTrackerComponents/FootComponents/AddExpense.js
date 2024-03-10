import { useContext } from 'react';
import './styles/Common.css';
import { BalanceContext, ExpenseContext, TransactionsContext } from '../AppData/FinancialData';

function AddExpenseButton(){
    let expense = useContext(ExpenseContext);
    let transactions = useContext(TransactionsContext);
    let balance = useContext(BalanceContext);
    return(
        <button className='functionalButton' onClick={()=>addExpense(expense, transactions, balance)}>Add Expense</button>
    )
}

function addExpense(expense, transactions, balance){
    let amt=prompt("Enter expense amount: ");
    let desc=prompt("Enter expense description: ");

    expense[1](parseFloat(expense[0])+parseFloat(amt));

    let newTransaction ={
        description: desc,
        amount: "-"+amt
    }

    transactions[1]([...transactions[0], newTransaction]);

    balance[1](parseFloat(balance[0])-parseFloat(amt));
}

export default AddExpenseButton;