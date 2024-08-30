import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Aluno from './routes/Aluno.jsx'


{/*Criando a função createBroserRouter */}
const router = createBrowserRouter([
  {
    //Criando as rotas pai
    path:'/',element:<App/>,
    errorElement:<Error/>,


    //CRiando as rotas filha
    children:[
      {path:'/',element:<Home/>},
      {path:'/aluno',element:<Aluno/>}
    ]
  }
])

{/*Criando o desetruct router para ser renderizado*/}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
