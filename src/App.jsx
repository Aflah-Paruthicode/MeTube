import { Provider } from 'react-redux'
import './App.css'
import Body from './components/Body'
import store from './utils/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainContainer from './components/MainContainer'
import WatchVideo from './components/WatchVideo'
import SearchResults from './components/SearchResults'
import Error from './components/Error'

function App() {

  const appRouter = createBrowserRouter([{
    path : '/',
    element : <Body />,
    errorElement : <Error/>,
    children : [
      {
        path : '/',
        element : <MainContainer />,
        errorElement : <Error />
      },
      {
        path : 'watch',
        element : <WatchVideo />,
        errorElement : <Error />
      },
      {
        path : 'search',
        element : <SearchResults />,
        errorElement : <Error />
      }
    ]

  }])

  return (
    <Provider store={store} >
    <div className=''> 
      <RouterProvider router={appRouter} />
    </div>
    </Provider>
  )
}

export default App
