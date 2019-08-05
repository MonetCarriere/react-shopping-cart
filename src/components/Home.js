import React, {useEffect} from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'
import MaterialIcons from 'material-icons-react'
import {useSelector} from 'react-redux'
import { mainContent } from '../actions/example';


export default props => {
  const storeItems = useSelector(appState => appState.mainContent)
 
  useEffect(() => {
    mainContent()
  },[])
  return (
    
      <div id="container">

        <div id="aside">
          <p class="asideP">Sizes:</p>
          <button class="button-size">XS</button>
          <button class="button-size">S</button>
          <button class="button-size">M</button> 
          <button class="button-size">ML</button>  <br/>
          <button class="button-size">L</button>
          <button class="button-size">XL</button>
          <button class="button-size">XXL</button>

          <p>Leave a star on Github if this <br/>
          Repository was useful :)</p>

          <button class="star-button"><MaterialIcons icon="grade"></MaterialIcons>Star</button>
          <button class="_750-button">750</button>
          </div>


          <div id="main">
          {storeItems.map(item => (
            <img src={`/assets/${item.sku}_1.jpg`}/>
          ))}

            
          </div>

      </div>
  )
}
