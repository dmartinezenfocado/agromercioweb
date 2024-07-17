import { useEffect } from 'react'
import { Category } from '../components/carousels/Category'
import { HeaderCarousel } from '../components/carousels/HeaderCarousel'
// import { Discovery } from '../components/discovery/Discovery'
// import { InterestOffers } from '../components/interest-offers/InterestOffers'
import { Offers } from '../components/offers/Offers'
import { PartnersSubscriptions } from '../components/partners-subscriptions/PartnersSubscriptions'
import { PaymentMethods } from '../components/payment-methods/PaymentMethods'
import { PromoAdds } from '../components/promo/PromoAdds'
// import { Stores } from '../components/stores/Stores'

export const Home = () => {
	useEffect(() => {
		document.title = 'Agromercio.com'
	}, [])

	return (
		<div className="App items-center h-full pb-20 overflow-x-hidden bg-background-meli">
			<HeaderCarousel />
			<div className='w-3/4 xl:w-full m-auto'>
				<PaymentMethods />
				<Offers />
				<PartnersSubscriptions />
				<PromoAdds />
				<Category />
			</div>
		</div>
	)
}
