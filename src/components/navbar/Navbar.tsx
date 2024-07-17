import { IoSearchOutline } from 'react-icons/io5'
import { BsChevronDown } from 'react-icons/bs'
import { AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai'
import { FormEvent, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { setSearchProducts } from '../../slices/searchSlice'
import { useSearchProductsMutation } from '../../api/meliApi'
import { useNavigate } from 'react-router-dom'
import { AddedToCartMessage } from '../cart/AddedToCartMessage'

export const Navbar = () => {
	const dispatch = useAppDispatch()
	const [searchTerm, setSearchTerm] = useState('')
	const [searchProducts, result] = useSearchProductsMutation()

	const { hasBeenAdded } = useAppSelector<any>((state) => state.cart)

	const navigate = useNavigate()

	const handleSearchProduct = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (searchTerm === '') {
			return
		}
		searchProducts(searchTerm)
	}

	useEffect(() => {
		if (result.data !== undefined) {
			dispatch(setSearchProducts(result.data))
			navigate(`/search/${result.data.query}`)
		}
	}, [result.data])

	return (
		<>
			<header className="bg-main-brown h-24 py-2 px-6">
				{/* header */}
				<div className="max-w-6xl m-auto">
					<div className="m-auto gap-3 flex justify-between items-center">
						<a href="/" className="logo">
							<img
								src="https://enfoco.com.do/test/apps/logoagromercio.png"
								width="60px"
								height="60px"
							/>
						</a>
						<a href="/" className="logo">
              			Agromercio.com
						</a>
						{/* <a href="/" className="logo bg-logo-large w-40 bg-no-repeat h-9 hidden lg:block" />
						<a href="/" className="logo bg-logo-small w-11 h-7 bg-contain bg-no-repeat lg:hidden" /> */}
						<form
							onSubmit={handleSearchProduct}
							className="w-full lg:w-2/4 h-10 flex relative gap-3 items-center"
						>
							<input
								type="text"
								placeholder="Buscar productos"
								className="w-full h-full rounded-sm shadow-md pl-8 lg:py-2 lg:px-3 outline-none font-normal text-sm relative"
								onChange={(e) => setSearchTerm(e.target.value)}
							/>
							<IoSearchOutline
								color="#b4b4b4"
								size={'1.2em'}
								className="lg:hidden absolute left-2 top-[10px]"
							/>
							<button className="hidden lg:block right-3 top-1/4 absolute search-button w-6">
								<IoSearchOutline color="#666670" size={'1.2em'} />
							</button>

							<AiOutlineMenu size={'2em'} color="#333" className="lg:hidden" />
							<AiOutlineShoppingCart
								onClick={() => navigate('/cart')}
								size={'2em'}
								color="#333"
								className="lg:hidden"
							/>
						</form>
						<a className="logo hidden lg:block">
                      Compra o vende sin intermediarios
						</a>
					</div>

					{/* NAVBAR */}

					<nav className="hidden mt-1 lg:flex justify-between">
						<ul className="nav-menu-categories w-3/6 flex gap-3 items-end text-sm font-light">
							<li className="flex items-center gap-1">
                            Categorias
								<BsChevronDown />
							</li>
							<li>Ofertas</li>
							<li>Historial</li>
							<li>Novedades</li>
							<li onClick={() => navigate('/sell')} className="cursor-pointer">Vender</li>
							<li>Ayuda</li>
						</ul>

						<ul className="nav-user-categories flex gap-5 items-end text-xs text-tiny">
						    <li onClick={() => navigate('/login')} className="cursor-pointer">Acceder</li>
							<li onClick={() => navigate('/register')} className="cursor-pointer">Crear cuenta</li>
							<li>Compras</li>
							<li onClick={() => navigate('/cart')} className="cursor-pointer">
								<AiOutlineShoppingCart size={'2em'} color="#303126" />
							</li>
						</ul>
					</nav>
				</div>
			</header>
			{hasBeenAdded && <AddedToCartMessage />}
		</>
	)
}
