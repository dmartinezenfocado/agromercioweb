import React, { useState } from 'react'

const Login: React.FC = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: ''
	})

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
			<h1 className="text-2xl font-bold mb-6">Inicio de Sesión</h1>
			<form onSubmit={handleSubmit}>
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

				<div className="mb-4">
					<button
						type="submit"
						className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
					>
            Iniciar Sesión
					</button>
				</div>
			</form>
		</div>
	)
}

export default Login
