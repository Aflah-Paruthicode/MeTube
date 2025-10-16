import { Provider } from 'react-redux'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import store from './utils/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainContainer from './components/MainContainer'
import WatchVideo from './components/WatchVideo'

function App() {

  const appRouter = createBrowserRouter([{
    path : '/',
    element : <Body />,
    children : [
      {
        path : '/',
        element : <MainContainer />
      },
      {
        path : 'watch',
        element : <WatchVideo />
      }
    ]

  }])

  return (
    <Provider store={store} >
    <div className=''>
      <Header /> 
      <RouterProvider router={appRouter} />
    </div>
    </Provider>
  )
}

export default App
