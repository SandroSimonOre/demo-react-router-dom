import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CreateTransaction } from './pages/CreateTransaction'
import { CreateAccount } from './pages/CreateAccount'
import './index.css'
import { BrowseAccounts } from './pages/BrowseAccounts'
import { AllAccounts } from './pages/AllAccounts'
import { AssetsAccounts } from './pages/AssetsAccounts'
import { LiabilitiesAccounts} from './pages/LiabilitiesAccounts'
import { ExpenseAccounts } from './pages/ExpenseAccounts'
import { IncomeAccounts } from './pages/IncomeAccounts'
import { Layout } from './components/Layout'

import { Accounts } from './pages/Accounts'
import { Transactions } from './pages/Transactions'
import { Reports } from './pages/Reports'

import { GlobalProvider } from './context/GlobalState'

export default function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Transactions />
        },
        {
          path: 'transactions',
          element: <Transactions />
        },
        {
          path: 'accounts',
          element: <Accounts />
        },
        {
          path: 'Reports',
          element: <Reports />,
          children: [
            {
              index: true,
              element: <AllAccounts />
            },
            {
              path: 'all-accounts',
              element: <AllAccounts />
            }
            
          ]
        }
      ]
    },
  ])
  
  return (
     
      <RouterProvider router={router} />
    
  )
}