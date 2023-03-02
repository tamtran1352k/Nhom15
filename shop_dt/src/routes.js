import Home from "./pages/Home";

import New from './pages/news';
import Event from './pages/event';
import Login from "./pages/Login";
import Register from "./pages/Register";
const routes = [
    
    {path:"home", component:<Home/>},
    {path:"new", component:<New/>},
    {path:"event", component:<Event/>},
    {path:"login", component:<Login/>},
    {path:"register", component:<Register/>},

];
 
export default routes;