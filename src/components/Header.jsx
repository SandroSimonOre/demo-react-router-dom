import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import { useGlobalState } from '../context/GlobalState'
import { useEffect } from 'react'

export const Header = () => {

    const { showMenu, setShowMenu } = useGlobalState()

    useEffect( () => {
        console.log('Effec....')
    })
    return (
        <div className='flex w-full justify-between'>
            <h1>Logotipo</h1>
            {
                showMenu ?
                <MdClose size={50} onClick={() => setShowMenu(false)}/>
                : <GiHamburgerMenu size={50} onClick={() => setShowMenu(true)}/>
            }
            
        </div>
    )
}