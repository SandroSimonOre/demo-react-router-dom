import { GiHamburgerMenu } from 'react-icons/gi'

export const Header = () => {
    return (
        <div className='flex w-full justify-between'>
            <h1>Logotipo</h1>
            <GiHamburgerMenu size={50}/>
        </div>
    )
}