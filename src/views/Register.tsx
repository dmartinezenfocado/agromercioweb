import React, { useState } from 'react'

const Register: React.FC = () => {
	const [profile, setProfile] = useState<'Vendedor' | 'Cliente' | ''>('')
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		companyName: '', // solo para Vendedor
		farmLocation: '' // solo para Vendedor
	})

	const handleProfileChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setProfile(e.target.value as 'Vendedor' | 'Cliente')
		setFormData({
			...formData,
			companyName: '',
			farmLocation: ''
		})
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
		<div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
			<h1 className="text-2xl font-bold mb-6">Crear Cuenta</h1>
			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<label htmlFor="profile" className="block text-sm font-medium text-gray-700">
            Selecciona el perfil
					</label>
					<select
						id="profile"
						value={profile}
						onChange={handleProfileChange}
						className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
					>
						<option value="">Seleccione una opción</option>
						<option value="Vendedor">Vendedor</option>
						<option value="Cliente">Cliente</option>
					</select>
				</div>

				<div className="mb-4">
					<label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nombre
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
					/>
				</div>

				<div className="mb-4">
					<label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Correo Electrónico
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
					/>
				</div>

				<div className="mb-4">
					<label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Contraseña
					</label>
					<input
						type="password"
						id="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
					/>
				</div>

				{profile === 'Vendedor' && (
					<>
						<div className="mb-4">
							<label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                Nombre de la Compañía
							</label>
							<input
								type="text"
								id="companyName"
								name="companyName"
								value={formData.companyName}
								onChange={handleChange}
								className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
							/>
						</div>

						<div className="mb-4">
							<label htmlFor="farmLocation" className="block text-sm font-medium text-gray-700">
                Ubicación de la Granja
							</label>
							<input
								type="text"
								id="farmLocation"
								name="farmLocation"
								value={formData.farmLocation}
								onChange={handleChange}
								className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
							/>
						</div>
					</>
				)}

				<div className="mb-4">
					<button
						type="submit"
						className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
					>
            Crear Cuenta
					</button>
				</div>
			</form>
		</div>
	)
}

export default Register
