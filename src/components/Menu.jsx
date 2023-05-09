export const Menu = () => {
    
    const menuItems = [

        'Create transaction',
        'Browse transactions',
        'Edit transaction',
        'Remove transaction'
    ]

    return (
        <div className='border w-5/6 p-2'>
            <ul>
                {
                    menuItems.map( e => (
                        <li 
                            key={window.crypto.randomUUID()}
                            className='py-3'
                        >
                            {e}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}