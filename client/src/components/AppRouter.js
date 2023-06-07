import React from 'react';
import {Routes as RouterSwitch, Route} from 'react-router-dom'

import Shop from "../pages/shop";
import Order from "../pages/order";
const AppRouter = () => {

    return (
        <RouterSwitch>
           <Route path={'/'} Component={Shop}/>
           <Route path={'/shopping_cart'} Component={Order}/>
        </RouterSwitch>
    );
};

export default AppRouter;