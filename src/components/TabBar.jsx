import { GrTransaction } from 'react-icons/gr'
import { MdOutlineAccountTree } from 'react-icons/md'
import { HiOutlineDocumentReport } from 'react-icons/hi'
import { Link } from 'react-router-dom'

export const TabBar = () => {

    const linksData = [
        {to: '/transactions', icon: <GrTransaction size={50} /> },
        {to: '/accounts', icon: <MdOutlineAccountTree size={50} /> },
        {to: '/reports', icon: <HiOutlineDocumentReport size={50} /> },
    ]

    return (
        <div className='w-full fixed left-0 bottom-0'>
            
            <nav className='flex justify-around p-2'>
                {
                    linksData.map(e => (
                        <Link 
                            key={window.crypto.randomUUID()}
                            to= {e.to} 
                            className=''
                        >
                            {e.icon}
                        </Link>
                    ))   
                }      
            </nav>
        </div>
    )
}