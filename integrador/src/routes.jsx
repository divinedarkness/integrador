import { Home } from './pages/Home'
import { Error } from './pages/Error'
import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './Layout'
import { ReceitasList, ReceitaDetalhes } from './pages/Receitas'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/receitas', element: <ReceitasList /> },
      { path: '/receitas/:id', element: <ReceitaDetalhes /> },
    ]
  },
  {
    path: '*',
    element: <Error />
  },
])
