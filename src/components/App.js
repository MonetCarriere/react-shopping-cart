import React, {useEffect} from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'
import MaterialIcons from 'material-icons-react'
import {useSelector} from 'react-redux'
import { mainContent } from '../actions/example';

import Home from './Home'
import {BrowserRouter as Router, Route} from 'react-router-dom'

export default props => {
 

  return (
    <Provider store={store}>
     <Router>
       <div>
         <Route exact path='/' component={Home}/>
       </div>
     </Router>
    </Provider>
  )
}


