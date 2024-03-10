import { useContext } from 'react';
import './styles/Common.css';
import { BalanceContext } from '../AppData/FinancialData';

function Balance(){
let Balance = useContext(BalanceContext)[0];
return (
    <div className='headInfobox'>
        Total Balance: <br/>
        <span className='headInfoBoxData'>
            {Balance}
        </span>
    </div>
)
}
export default Balance;