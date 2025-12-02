import { Home } from './pages/Home'
import { Error } from './pages/Error'
import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './Layout'
import { Receitas } from './pages/Receitas'



export const router = createBrowserRouter([


    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/home', element: <Home /> },
            { path: '/receitas', element: <Receitas /> },
        ]
    },
    {
        path: '*',
        element: <Error />
    },
])