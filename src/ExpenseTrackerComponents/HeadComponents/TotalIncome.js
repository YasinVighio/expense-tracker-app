import './styles/Common.css';
import { useContext } from 'react';
import { IncomeContext } from '../AppData/FinancialData';

function TotalIncome(){
let Income = useContext(IncomeContext)[0];
return (
    <div className='headInfobox'>
        Total Income: <br/> 
        <span className='headInfoBoxData'>
            {Income}
        </span>
    </div>
)
}
export default TotalIncome;