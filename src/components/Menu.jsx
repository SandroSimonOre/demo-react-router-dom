import { useGlobalState } from "../context/GlobalState"

export const Menu = () => {
    
    const { showMenu } = useGlobalState()
    //console.log(menuStatus)
    const menuItems = [

        'Create transaction',
        'Browse transactions',
        'Edit transaction',
        'Remove transaction'
    ]

    return (
        <div className={`border w-5/6 p-2 ${showMenu ? '' : 'hidden'}`}>
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