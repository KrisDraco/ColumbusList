
import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

//Screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

//Components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import Sidedrawer from './components/SideDrawer'

function App() {

  const [sideToggle, setSideToggle] = useState (false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)}/>
      <Sidedrawer show = {sideToggle}/>
      <Backdrop show = {sideToggle} click ={() => setSideToggle(false)}/>
      <main>
        <Routes>
          <Route exact path = "/" element={<HomeScreen/>}/>
          <Route exact path = "/product/:id" element={<ProductScreen/>}/>
          <Route exact path = "/cart" element={<CartScreen/>}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
