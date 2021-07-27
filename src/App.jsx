import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NabBar from './components/NabBar';
import HomePage from './pages/HomePage';
import SingleCategory from './pages/SingleCategory';


const App = () => {

  return (
    <BrowserRouter>
      <NabBar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/category-:title-:id' component={SingleCategory} />
      </Switch>
    </BrowserRouter>
  )
  
}

export default App

