import React from "react";
import { Route, BrowserRouter } from "react-router-dom";


import Login from "./Login";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           
           <Route component = { Usuario }  path="/login" />
       </BrowserRouter>
   )
}

export default Routes;