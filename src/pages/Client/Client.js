import React from 'react'
import Home from '../../pages/Client/Home';
import Product from '../../pages/Client/Product';
import Header from '../../layouts/Client/Header/Header';
import Footer from '../../layouts/Client/Footer/Footer';
import { Switch } from 'react-router';

export default function Client() {
    return (
        <div>
            <Header />
            <Switch>
                <Home path="/home" />
                <Product path="/product" />
            </Switch>
        </div>
    )
}
