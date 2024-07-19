import './App.css'
import { Navbar } from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { Home } from './views/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Search } from './views/Search'
import { Product } from './views/Product'
import Register from './views/Register'
import Login from './views/Login'
import LoanRequest from './views/LoanRequest'
import SellProduct from './views/SellProduct'
import News from './views/News'
import Modal from 'react-modal'
import { Cart } from './views/Cart'
import { useEffect } from 'react'
import { useAppSelector } from './hooks/reduxHooks'
import { Checkout } from './views/Checkout'
import { Modals } from './components/modal/Modals'

Modal.setAppElement('#root')

function App () {
	const { products } = useAppSelector<any>(state => state.cart)

	useEffect(() => {
		if (products.length !== 0) {
			localStorage.setItem('cart', JSON.stringify(products))
		}
	}, [products])

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />}/>
				<Route path='/register' element={<Register />}/>
				<Route path='/login' element={<Login />}/>
				<Route path='/search/:product' element={<Search />}/>
				<Route path='/:product' element={<Product />}/>
				<Route path='/cart' element={<Cart/>}/>
				<Route path='/checkout/cart' element={<Checkout />}/>
				<Route path='/loan' element={<LoanRequest />}/>
				<Route path='/sell' element={<SellProduct />}/>
				<Route path='/news' element={<News />}/>
			</Routes>
			<Modals />
			<Footer />
		</BrowserRouter>
	)
}

export default App
