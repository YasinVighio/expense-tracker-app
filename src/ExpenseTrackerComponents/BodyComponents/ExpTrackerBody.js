import { useContext } from 'react';
import './styles/ExpTrackerBody.css';
import { TransactionsContext } from '../AppData/FinancialData';

function ExpTrackerBody() {
    // Destructure the transactions from the context
    const transactions = useContext(TransactionsContext)[0];

    return (
        <div className="expTrackerBody">
            <table className='transactionsTable'>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Transaction</th>
                        <th>Amt</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.length > 0 ? (
                        transactions.map((tran, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{tran.description}</td>
                                <td>{tran.amount}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No transactions</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ExpTrackerBody;
