export const PartnersSubscriptions = () => {
	return (
		<section className='h-full mb-14 mt-7'>
			<div className='w-full text-gray-700 rounded-lg m-auto max-w-homescreen h-[340px] flex flex-col'>
				<h2 className="text-left text-2xl font-light text-brown-meli mb-6">Beneficios</h2>
				<div className="flex gap-4 h-64">
					{/* Clima */}
					<div className="w-96 relative rounded-md overflow-hidden">
						<div className="subscription-gradient-disney"/>
						<img src="https://enfoco.com.do/test/apps/clima.png"/>
						<div className="absolute z-10 bottom-0 text-white flex justify-center gap-2 p-4">
							{/* <img className="rounded-md" src="https://http2.mlstatic.com/resources/frontend/statics/loyal/comboplus-brand.png?v=1"/> */}
							<div className="text-container w-full flex flex-col text-left">
								<span>Recibe notificaciones del clima en tiempo real y toma medidas para evitar perdidas</span>
							</div>
						</div>
					</div>

					{/* Banco */}
					<div className="w-96 relative rounded-md overflow-hidden">
						<div className="subscription-gradient-disney"/>
						<img src="https://enfoco.com.do/test/apps/banco.png"/>
						<div className="absolute z-10 bottom-0 text-white flex justify-center gap-2 p-4">
							{/* <img className="rounded-md" src="https://http2.mlstatic.com/resources/frontend/statics/loyal/comboplus-brand.png?v=1"/> */}
							<div className="text-container w-full flex flex-col text-left">
								<span>Solicita préstamos, invierte y crece conectando directamente con el banco agrícola</span>
							</div>
						</div>
					</div>

					{/* Banco */}
					<div className="w-96 relative rounded-md overflow-hidden">
						<div className="subscription-gradient-disney"/>
						<img src="https://enfoco.com.do/test/apps/noticias.png"/>
						<div className="absolute z-10 bottom-0 text-white flex justify-center gap-2 p-4">
							{/* <img className="rounded-md" src="https://http2.mlstatic.com/resources/frontend/statics/loyal/comboplus-brand.png?v=1"/> */}
							<div className="text-container w-full flex flex-col text-left">
								<span>Actualízate con las últimas noticias referentes a la agricultura</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
