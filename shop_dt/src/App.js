
import { Route, Routes } from 'react-router-dom';
// import './App.css';
import DefaultLayout from './containers/DefaultLayout';
import Login from './login';
import Constructor1 from './pages/Constructor';
import {DataProvider} from './components/Context'
import Section from './components/Section'
import Products from './components/section/Products';
import Details from './components/section/Details';
import Cart from './components/section/Cart';
import Payment from './components/section/Payment';
import Header from './containers/Header';
import Footer from './pages/footer';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
function App() {
  return (
    <>
    <Header></Header>
    <DataProvider>
     
    <Routes>
  
                    <Route path="/product" element={<Products/>}   />
                    <Route path="/product/:id" exact  element={<Details/>} >  </Route>
                   
                    <Route path="/cart" element={<Cart/>}  />
                    <Route path="/payment" element={<Payment/>}  />
                   
            </Routes>
      
            </DataProvider>
   <Routes>
   <Route path='/*' element={<DefaultLayout />}></Route>
   </Routes>
  <Footer/>
 
    
    </>
  );
}

export default App;
