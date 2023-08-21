import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import { store } from './store/store'
import { Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import { fetchTasks } from './store/thunks/api'
import { limits } from './variables/variables'

//fetch at the start
store.dispatch(fetchTasks({ limits: limits, offset: 0}))

const App: React.FunctionComponent<unknown> = () => {
    
    return(
       <Provider store={store}>
        <RouterProvider router={router} />
       </Provider>  
    )
}

export default App