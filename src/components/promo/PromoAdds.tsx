export const PromoAdds = () => {
	return (
		<section className='h-full mb-14 mt-7'>
			<div className='w-full text-gray-700 rounded-lg m-auto max-w-homescreen bg-white h-[340px] shadow-sm'>
				<div className="h-[87px] bg-gradient-to-r from-green-800 via-brown-700 to-indigo-900 rounded-t-lg flex justify-between items-center text-white px-6 py-4">
					<div className="text-2xl font-semibold">Destaca tus Productos y Aumenta tus Ventas</div>
					<div className="flex flex-col text-right text-xs font-semibold relative price-separator">
						<span>Desde</span>
						<div className="">
							<span className="text-2xl">RD$ 500</span>
						</div>
						<span>Según el tiempo</span>
					</div>
				</div>
				<div className="text-left p-4">
					<span>Obtén visibilidad adicional en nuestros anuncios de Facebook, Instagram y YouTube. Atrae más clientes y maximiza tus oportunidades de venta.</span>
					<div className="flex justify-between mt-10">
						<div className="flex gap-4 items-center">
							<img className="border rounded-full" width={'72px'} src="https://enfoco.com.do/test/apps/facebook.svg"/>
							<span>Visibilidad en Facebook</span>
						</div>
						<div className="flex gap-4 items-center">
							<img className="border rounded-full" width={'72px'} src="https://enfoco.com.do/test/apps/instagram.svg"/>
							<span>Visibilidad en Instagram</span>
						</div>
						<div className="flex gap-4 items-center w-96">
							<img className="border rounded-full" width={'72px'} src="https://enfoco.com.do/test/apps/youtube.svg"/>
							<span>Visibilidad en Youtube</span>
						</div>
					</div>
				</div>
				<hr />
				<div className="text-right pt-4 px-8">
					<button type="button" className="text-white bg-green-500 hover:bg-green-600 transition-colors ease-in font-medium rounded-md text-sm px-6 py-4">Destacar Productos</button>
				</div>
			</div>
		</section>
	)
}
