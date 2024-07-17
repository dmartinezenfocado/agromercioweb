import React, { useState } from 'react'

const LoanRequest: React.FC = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		documentType: '',
		documentNumber: '',
		nationality: '',
		gender: '',
		maritalStatus: '',
		province: '',
		municipality: '',
		sector: '',
		street: '',
		building: '',
		phone: '',
		mobile: '',
		email: '',
		loanAmount: '',
		term: '',
		loanPurpose: '',
		projectDescription: '',
		projectLocation: ''
	})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log('Datos del formulario:', formData)
		// Aquí puedes manejar el envío de los datos del formulario
	}

	return (
		<div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
			<h1 className="text-2xl font-bold mb-6">Solicitud de Préstamo</h1>
			<form onSubmit={handleSubmit}>

				{/* Sección 1: Datos Personales */}
				<h2 className="text-xl font-semibold mb-4">Datos Personales</h2>
				<div className="mb-4">
					<label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Nombres</label>
					<input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
				</div>
				<div className="mb-4">
					<label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Apellidos</label>
					<input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
				</div>
				<div className="mb-4">
					<label htmlFor="documentType" className="block text-sm font-medium text-gray-700">Tipo de Documento</label>
					<input type="text" id="documentType" name="documentType" value={formData.documentType} onChange={handleChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
				</div>
				<div className="mb-4">
					<label htmlFor="documentNumber" className="block text-sm font-medium text-gray-700">Número de Documento</label>
					<input type="text" id="documentNumber" name="documentNumber" value={formData.documentNumber} onChange={handleChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
				</div>
				<div className="mb-4">
					<label htmlFor="nationality" className="block text-sm font-medium text-gray-700">Nacionalidad</label>
					<input type="text" id="nationality" name="nationality" value={formData.nationality} onChange={handleChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
				</div>
				<div className="mb-4">
					<label htmlFor="gender" className="block text-sm font-medium text-gray-700">Sexo</label>
					<input type="text" id="gender" name="gender" value={formData.gender} onChange={handleChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
				</div>
				<div className="mb-4">
					<label htmlFor="maritalStatus" className="block text-sm font-medium text-gray-700">Estado Civil</label>
					<input type="text" id="maritalStatus" name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
				</div>

				{/* Sección 2: Dirección y contactos */}
				<h2 className="text-xl font-semibold mb-4">Dirección y Contactos</h2>
				<div className="mb-4">
					<label htmlFor="province" className="block text-sm font-medium text-gray-700">Provincia</label>
					<input type="text" id="province" name="province" value={formData.province} onChange={handleChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
				</div>
				<div className="mb-4">
					<label htmlFor="municipality" className="block text-sm font-medium text-gray-700">Municipio</label>
					<input type="text" id="municipality" name="municipality" value={formData.municipality} onChange={handleChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
				</div>
				<div className="mb-4">
					<label htmlFor="sector" className="block text-sm font-medium text-gray-700">Sector</label>
					<input type="text" id="sector" name="sector" value={formData.sector} onChange={handleChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
				</div>
				<div className="mb-4">
					<label htmlFor="street" className="block text-sm font-medium text-gray-700">Calle</label>
					<input type="text" id="street" name="street" value={formData.street} onChange={handleChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
				</div>
				<div className="mb-4">
					<label htmlFor="building" className="block text-sm font-medium text-gray-700">Edificio</label>
					<input type="text" id="building" name="building" value={formData.building} onChange={handleChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
				</div>
				<div className="mb-4">
					<label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono</label>
					<input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
				</div>
				<div className="mb-4">
					<label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Celular</label>
					<input type="text" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
				</div>
				<div className="mb-4">
					<label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
					<input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
				</div>

				{/* Sección 3: Datos del Proyecto */}
				<h2 className="text-xl font-semibold mb-4">Datos del Proyecto</h2>
				<div className="mb-4">
					<label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700">Monto Solicitado</label>
					<input type="number" id="loanAmount" name="loanAmount" value={formData.loanAmount} onChange={handleChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
				</div>
				<div className="mb-4">
					<label htmlFor="term" className="block text-sm font-medium text-gray-700">Plazo (en meses)</label>
					<input type="number" id="term" name="term" value={formData.term} onChange={handleChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
				</div>
				<div className="mb-4">
					<label htmlFor="loanPurpose" className="block text-sm font-medium text-gray-700">Destino del Préstamo</label>
					<input type="text" id="loanPurpose" name="loanPurpose" value={formData.loanPurpose} onChange={handleChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
				</div>
				<div className="mb-4">
					<label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700">Descripción del Proyecto</label>
					<textarea id="projectDescription" name="projectDescription" value={formData.projectDescription} onChange={handleChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" rows={4} />
				</div>
				<div className="mb-4">
					<label htmlFor="projectLocation" className="block text-sm font-medium text-gray-700">Lugar o Cercanía del Proyecto</label>
					<input type="text" id="projectLocation" name="projectLocation" value={formData.projectLocation} onChange={handleChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
				</div>

				{/* Disclaimer */}
				<div className="mb-4">
					<p className="text-sm text-gray-600">
            Los suscritos declaran que las informaciones contenidas en esta solicitud son correctas y autorizan al Banco Agrícola a comprobar su veracidad en la forma que estime conveniente. En caso de aprobada su pre-solicitud, la entidad podrá igualmente solicitar y remitir a los centros de información crediticia los datos que antecedan y todo lo referente a comportamiento crediticio.
					</p>
				</div>

				{/* Botón de Enviar */}
				<div className="mb-4">
					<button
						type="submit"
						className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
					>
            Enviar Solicitud
					</button>
				</div>
			</form>
		</div>
	)
}

export default LoanRequest
