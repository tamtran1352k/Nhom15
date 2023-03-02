import React, { Fragment } from "react";
import Header from "./Header";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import New from "../pages/news";
import routes from './../routes';
import Event from './../pages/event';
import Login from "../pages/Login";
import Register from "../pages/Register";
import Major from "../pages/Major";
import Constructor1 from "../pages/Constructor";
import Products from "../components/section/Products";
import Details from "../components/section/Details";
import Cart from "../components/section/Cart";
import Payment from "../components/section/Payment";

import {DataProvider} from "../components/Context"
import FeedbackForm from "../pages/FeedBack";
import ManageFeedback from "../pages/ManageFeedback";
import Contact from "../pages/Contact";
import Samsung from "../pages/Samsung";
import Oppo from "../pages/Oppo";
import Iphone from "../pages/Iphone";
import Chitietiphone1 from "../pages/Chitietiphone1";
import Chitietiphone2 from "../pages/Chitietiphone2";
import Chitietoppo1 from "../pages/Chitietoppo1";
import Chitietoppo2 from "../pages/Chitietoppo2";
import Chitietsamsung1 from "../pages/Chitietsamsung1";
import Chitietsamsung2 from "../pages/Chitietsamsung2";
import Recruitment from "../pages/recruitment";
const DefaultLayout = () => {
    return (
        <>
            <DataProvider>
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="home" element={<Home/>}/>
                <Route path="new" element={<New/>}/>
                <Route path="event" element={<Event/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
                <Route path="major" element={<Major/>}/>
                <Route path="k" element={<Constructor1/>}/>
                <Route path="feedback" element={<FeedbackForm/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="mnFeedBack" element={<ManageFeedback/>}/>
                <Route path="samsung" element={<Samsung/>}/>
                <Route path="oppo" element={<Oppo/>}/>
                <Route path="iphone" element={<Iphone/>}/>
                <Route path="chitietiphone1" element={<Chitietiphone1 />} />
                <Route path="tuyendung" element={<Recruitment />} />
        <Route path="chitietiphone2" element={<Chitietiphone2 />} />
        <Route path="chitietoppo1" element={<Chitietoppo1 />} />
        <Route path="chitietoppo2" element={<Chitietoppo2 />} />
        <Route path="chitietsamsung1" element={<Chitietsamsung1 />} />
        <Route path="chitietsamsung2" element={<Chitietsamsung2 />} />
                <Route path="/" component={Products} exact />
                    <Route path="/product" component={Products} exact  />
                    <Route path="/product/:id" component={Details} exact />
                    <Route path="/cart" component={Cart}  exact/>
                    <Route path="/payment" component={Payment} exact />
                 
            </Routes>
            </DataProvider>
        </>
    );
}
 
export default DefaultLayout;