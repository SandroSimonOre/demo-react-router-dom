import { Outlet, Link } from 'react-router-dom'


export const BrowseAccounts = () => {
    return (
        <div>
            <h1>Browse accounts</h1>
            <nav>
                <Link to= 'all-accounts'>All</Link>
                <Link to= 'assets-accounts'>Assets</Link>
                <Link to= 'liabilities-accounts'>Liabilities</Link>
                <Link to= 'income-accounts'>Income</Link>
                <Link to= 'expense-accounts'>Expense</Link>
            </nav>
            <Outlet />
        </div>        
        
    )
}