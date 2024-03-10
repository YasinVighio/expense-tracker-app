import './styles/Common.css';
import { ExpenseContext } from '../AppData/FinancialData';
import { useContext } from 'react';

function TotalExpense(){
let Expense = useContext(ExpenseContext)[0];
return (
    <div className='headInfobox'>
        Total Expense: <br/>
        <span className='headInfoBoxData'>
            {Expense}
        </span>
    </div>
)
}
export default TotalExpense;