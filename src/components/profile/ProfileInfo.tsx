import React from 'react'
import Badge from '../courses/Badge'

const ProfileInfo: React.FC = () => {
	const sellerData = {
		name: 'Juan Pérez',
		email: 'juan.perez@example.com',
		phone: '+1 809-555-5555',
		location: 'Santo Domingo, República Dominicana',
		badges: [
			{ title: 'Curso de Agricultura Sostenible', imageUrl: 'https://enfoco.com.do/test/apps/insignia1.png' },
			{ title: 'Curso de Tecnología de Riego', imageUrl: 'https://enfoco.com.do/test/apps/insignia2.png' },
			{ title: 'Curso de agricultura organica', imageUrl: 'https://enfoco.com.do/test/apps/insignia3.png' },
			{ title: 'Curso de manejo de plagas', imageUrl: 'https://enfoco.com.do/test/apps/insignia4.png' }
		]
	}

	return (
		<div className="container mx-auto py-6">
			<div className="bg-white rounded-lg shadow-md p-6">
				<div className="flex items-center mb-6">
					<img className="w-24 h-24 rounded-full mr-4" src="https://enfoco.com.do/test/apps/juan.png" alt={sellerData.name} />
					<div>
						<h2 className="text-2xl font-bold">{sellerData.name}</h2>
						<p className="text-gray-600">{sellerData.email}</p>
						<p className="text-gray-600">{sellerData.phone}</p>
						<p className="text-gray-600">{sellerData.location}</p>
					</div>
				</div>
				<div>
					<h3 className="text-xl font-bold mb-4">Insignias de Cursos Completados</h3>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						{sellerData.badges.map((badge, index) => (
							<Badge key={index} title={badge.title} imageUrl={badge.imageUrl} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo