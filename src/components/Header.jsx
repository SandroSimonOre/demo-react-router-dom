import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header>
            <nav>
                <Link to= '/create-transaction'>Create transaction</Link>
                <Link to= '/create-account'>Create account</Link>
                <Link to= '/browse-accounts'>Browse accounts</Link>
                
            </nav>
        </header>
    )
}