import { Link } from 'react-router-dom'

export const Sidebar = () => {

    const linksData = [
        {to: '/create-transaction', title: 'Create transaction' },
        {to: '/create-account', title: 'Create account' },
        {to: '/browse-accounts', title: 'Browse accounts' },
    ]

    return (
        <aside className='w-1/6 p-4'>
            <h1 className='font-bold text-3xl p-2 mb-8'>Logotipo</h1>
            <nav className='flex flex-col gap-4'>
                {
                    linksData.map(e => (
                        <Link 
                            key={window.crypto.randomUUID()}
                            to= {e.to} 
                            className='border rounded-lg p-2'
                        >
                            {e.title}
                        </Link>
                    ))   
                }      
            </nav>
        </aside>
    )
}