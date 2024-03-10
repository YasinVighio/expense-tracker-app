import '../Commons/Common.css';
import AddExpenseButton from './AddExpense';
import AddIncomeButton from './AddIncome';

function ExpTrackerFoot(){
    return(
        <div className='expTrackerHeaderFooter expTrackerFoot'>
            <AddExpenseButton/>
            <AddIncomeButton/>
        </div>
    )
}


export default ExpTrackerFoot;