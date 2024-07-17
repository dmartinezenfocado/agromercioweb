import { paymentMethodIcons } from '../../assets/icons/paymentMethodsIcons'

export const PaymentMethods = () => {
	return (
		<section className='h-[90px] mb-14 mt-7'>
			<div className='bg-white flex justify-between h-full max-w-homescreen m-auto rounded-md shadow-sm'>
				{/* Prestamos */}
				<div className='h-full flex items-center p-5 gap-3'>
					<div>
						<img src={paymentMethodIcons.cuotas}/>
					</div>
					<div className='flex flex-col items-start'>
						<span className='text-md'>Préstamos</span>
						<a href='https://bancoagricola.gob.do/productos/prestamos-solicitud/' target="_blank" rel="noreferrer"><span className='text-xs text-blue-500 hover:underline'>Solicita, invierte y crece</span></a>
					</div>
				</div>
				{/* Ahorros */}
				<div className='h-full flex items-center p-5 gap-3'>
					<div>
						<img src={paymentMethodIcons.efectivo}/>
					</div>
					<div className='flex flex-col items-start'>
						<span className='text-md'>Ahorros</span>
						<a href='https://bancoagricola.gob.do/productos/ahorros/' target="_blank" rel="noreferrer"><span className='text-xs text-blue-500 hover:underline'>Ver más</span></a>
					</div>
				</div>
				{/* Certificados */}
				<div className='h-full flex items-center p-5 gap-3'>
					<div>
						<img src={paymentMethodIcons.debito}/>
					</div>
					<div className='flex flex-col items-start'>
						<span className='text-md'>Certificados Financieros</span>
						<a href='https://bancoagricola.gob.do/productos/prestamos-solicitud/' target="_blank" rel="noreferrer"><span className='text-xs text-blue-500 hover:underline'>Ver más</span></a>
					</div>
				</div>
				{/* Factoring */}
				<div className='h-full flex items-center p-5 gap-3'>
					<div>
						<img src={paymentMethodIcons.credito}/>
					</div>
					<div className='flex flex-col items-start'>
						<span className='text-md'>Factoring</span>
						<a href='https://bancoagricola.gob.do/productos/prestamos-solicitud/' target="_blank" rel="noreferrer"><span className='text-xs text-blue-500 hover:underline'>Ver más</span></a>
					</div>
				</div>
				{/* Más */}
				<div className='h-full flex items-center p-5 gap-3 border-l'>
					<div>
						<img src={paymentMethodIcons.mas}/>
					</div>
					<div className='flex flex-col items-start'>
					</div>
				</div>
			</div>
		</section>
	)
}
