import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
import Home from './pages/HomePage'
import About from './pages/AboutPage'
import Contact from './pages/ContactPage'
import Cart from './pages/CartPage'
import Products from './pages/ProductsPage'
import SingleProduct from './pages/SingleProductPage'
import Default from './pages/Default'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Sidecart from './components/Sidecart'
import Footer from './components/Footer'

import { Route, Switch } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar/>
      <Sidebar/>
      <Sidecart/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/cart' component={Cart}/>
        <Route exact path='/products' component={Products}/>
        <Route exact path='/product/:id' component={SingleProduct}/>
        <Route component={Default}/>
      </Switch>
      <Footer/>

    </>
  );
}

export default App;
