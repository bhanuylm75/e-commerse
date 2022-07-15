import { Component } from 'react';
import NavbarComponent from './components/NavbarComponent';
import { Route, Routes,  } from 'react-router-dom'
import Home from './components/Homepage';
import Shop from './components/shop-component';
import Authentication from './components/authentication';
import Checkout from './components/checkoutpage';
import "./App.css"
class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavbarComponent/>
          <Routes>
            <Route  path="/" element={<Home/>}/>
            <Route path="/shop/*" element={<Shop/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/auth" element={<Authentication/>}/>
          </Routes>
      </div>

    );
  }
}
export default App
