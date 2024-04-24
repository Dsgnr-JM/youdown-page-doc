import { useRoutes } from 'react-router-dom'
import Home from './routes/Home'
import Footer from './components/Footer'
import Doc from './routes/Doc'
import NavHeader from "./components/NavHeader";

const router = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/doc',
    element: <Doc/>
  }
]

function App () {
  const element = useRoutes(router)
  return (
    <div className='w-full min-h-screen h-auto'>
      <NavHeader/>
      {element}
      <Footer/>
    </div>
  )
}

export default App
