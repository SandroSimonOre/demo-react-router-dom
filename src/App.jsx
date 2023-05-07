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
import { MainLayout } from './components/MainLayout'

export default function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <CreateTransaction />
        },
        {
          path: 'create-transaction',
          element: <CreateTransaction />
        },
        {
          path: 'create-account',
          element: <CreateAccount />
        },
        {
          path: 'browse-accounts',
          element: <BrowseAccounts />,
          children: [
            {
              index: true,
              path: 'all-accounts',
              element: <AllAccounts />
            },
            {
              path: 'assets-accounts',
              element: <AssetsAccounts />
            },
            {
              path: 'liabilities-accounts',
              element: <LiabilitiesAccounts />
            },
            {
              path: 'income-accounts',
              element: <IncomeAccounts />
            },
            {
              path: 'expense-accounts',
              element: <ExpenseAccounts />
            },
            
          ]
        }
      ]
    },
  ])
  
  return (
    
      <RouterProvider router={router} />
    
  )
}