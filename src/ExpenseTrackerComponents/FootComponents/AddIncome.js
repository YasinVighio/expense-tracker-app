import { useContext } from 'react';
import { BalanceContext, IncomeContext, TransactionsContext } from '../AppData/FinancialData';
import './styles/Common.css';

function AddIncomeButton(){
    let income = useContext(IncomeContext);
    let transactions = useContext(TransactionsContext);
    let balance = useContext(BalanceContext);
    return(
        <button className='functionalButton' onClick={()=>addIncome(income, transactions, balance)}>Add Income</button>
    )
}

function addIncome(income, transactions, balance){
    let amt=prompt("Enter income amount: ");
    let desc=prompt("Enter income description: ");

    income[1](parseFloat(income[0])+parseFloat(amt));

    let newTransaction ={
        description: desc,
        amount: "+" + amt
    }

    transactions[1]([...transactions[0], newTransaction]);

    balance[1](parseFloat(balance[0])+parseFloat(amt));
}

export default AddIncomeButton;