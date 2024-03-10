import Balance from './Balance';
import TotalExpense from './TotalExpense';
import TotalIncome from './TotalIncome';
import '../Commons/Common.css';

function ExpTrackerHead(){
    return(
        <div className='expTrackerHeaderFooter'>
            <TotalIncome/>
            <Balance/>
            <TotalExpense/>
        </div>
    )
}


export default ExpTrackerHead;