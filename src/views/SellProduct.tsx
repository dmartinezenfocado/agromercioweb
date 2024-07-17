import React, { useState, useCallback } from 'react'
import 'tailwindcss/tailwind.css'

const SellProduct: React.FC = () => {
	const [formData, setFormData] = useState({
		category: '',
		productName: '',
		price: '',
		description: '',
		quantity: '',
		quantityUnit: 'Gramos',
		frequency: '',
		frequencyUnit: 'Días',
		images: [] as File[]
	})

	const categories = ['Frutas', 'Vegetales', 'Granos', 'Lácteos', 'Carne', 'Otros']
	const quantityUnits = ['Gramos', 'Kilos', 'Toneladas']
	const frequencyUnits = ['Días', 'Semanas', 'Meses', 'Años']

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setFormData({
				...formData,
				images: Array.from(e.target.files)
			})
		}
	}

	const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		e.stopPropagation()
		if (e.dataTransfer.files) {
			setFormData({
				...formData,
				images: Array.from(e.dataTransfer.files)
			})
		}
	}, [formData])

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log('Datos del formulario:', formData)
		// Aquí puedes manejar el envío de los datos del formulario
	}

	return (
		<div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
			<h1 className="text-2xl font-bold mb-6">Vender Producto</h1>
			<form onSubmit={handleSubmit}>

				{/* Categoría */}
				<div className="mb-4">
					<label htmlFor="category" className="block text-sm font-medium text-gray-700">Categoría</label>
					<select id="category" name="category" value={formData.category} onChange={handleChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
						<option value="">Seleccionar Categoría</option>
						{categories.map((category, index) => (
							<option key={index} value={category}>{category}</option>
						))}
					</select>
				</div>

				{/* Nombre del Producto */}
				<div className="mb-4">
					<label htmlFor="productName" className="block text-sm font-medium text-gray-700">Nombre del Producto</label>
					<input type="text" id="productName" name="productName" value={formData.productName} onChange={handleChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
				</div>

				{/* Precio */}
				<div className="mb-4">
					<label htmlFor="price" className="block text-sm font-medium text-gray-700">Precio</label>
					<input type="number" id="price" name="price" value={formData.price} onChange={handleChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
				</div>

				{/* Descripción */}
				<div className="mb-4">
					<label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción</label>
					<textarea id="description" name="description" value={formData.description} onChange={handleChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" rows={4} />
				</div>

				{/* Cantidad Producida */}
				<div className="mb-4">
					<label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Cantidad Producida</label>
					<div className="flex">
						<input type="number" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
						<select id="quantityUnit" name="quantityUnit" value={formData.quantityUnit} onChange={handleChange} className="mt-1 block w-1/3 py-2 px-3 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
							{quantityUnits.map((unit, index) => (
								<option key={index} value={unit}>{unit}</option>
							))}
						</select>
					</div>
				</div>

				{/* Frecuencia */}
				<div className="mb-4">
					<label htmlFor="frequency" className="block text-sm font-medium text-gray-700">Frecuencia</label>
					<div className="flex">
						<input type="number" id="frequency" name="frequency" value={formData.frequency} onChange={handleChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
						<select id="frequencyUnit" name="frequencyUnit" value={formData.frequencyUnit} onChange={handleChange} className="mt-1 block w-1/3 py-2 px-3 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
							{frequencyUnits.map((unit, index) => (
								<option key={index} value={unit}>{unit}</option>
							))}
						</select>
					</div>
				</div>

				{/* Adjuntar Imágenes */}
				<div className="mb-4">
					<label htmlFor="images" className="block text-sm font-medium text-gray-700">Adjuntar Imágenes</label>
					<div
						onDragOver={(e) => e.preventDefault()}
						onDrop={handleDrop}
						className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-300 rounded-md"
					>
						<div className="space-y-1 text-center">
							<svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
								<path d="M14 24l10-10m0 0l10 10m-10-10v16m8 4H14" />
							</svg>
							<div className="flex text-sm text-gray-600">
								<label
									htmlFor="file-upload"
									className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
								>
									<span>Subir un archivo</span>
									<input id="file-upload" name="images" type="file" multiple className="sr-only" onChange={handleFileChange} />
								</label>
								<p className="pl-1">o arrastrar y soltar</p>
							</div>
							<p className="text-xs text-gray-500">PNG, JPG, GIF hasta 10MB</p>
						</div>
					</div>
					{formData.images.length > 0 && (
						<ul className="mt-2 space-y-2">
							{formData.images.map((file, index) => (
								<li key={index} className="flex items-center justify-between text-sm text-gray-600">
									<span>{file.name}</span>
									<button
										type="button"
										onClick={() => setFormData({
											...formData,
											images: formData.images.filter((_, i) => i !== index)
										})}
										className="text-red-600 hover:text-red-900"
									>
                    Eliminar
									</button>
								</li>
							))}
						</ul>
					)}
				</div>

				{/* Botón de Guardar */}
				<div className="mb-4">
					<button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Guardar
					</button>
				</div>
			</form>
		</div>
	)
}

export default SellProduct
