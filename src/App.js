import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './pages/navbar/navbar';
import Jumbotron from './pages/jumbotron/jumbotron';
import Order from './pages/order/order';
import Rent from './pages/rent/rent';
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
	return (
		<div className="App">


			<BrowserRouter>
				<Route exact path="/" component={Jumbotron} />
				<Route exact path="/rent" component={Rent} />
				<Route exact path="/order" component={Order} />
			</BrowserRouter>
		</div>
	);
}

export default App;
