import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom' 
import Home from './pages/Home'
import About from './pages/About'
import Main from './pages/Main'
import Product from './pages/Product'

const App =()=>{
  return(
    <BrowserRouter>
    <Switch>
      <Route exact path={'/'} component={Home} />

        <Route path={'/About'} component={About} />

        <Route path={'/main'} component={Main}/>
        <Route path={'/product/:id'} component={Product}/>
   
        </Switch>
    </BrowserRouter>
  )
}
export default App