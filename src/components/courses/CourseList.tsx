import React from 'react'
import NewsItem from './CourseItem'

const newsData = [
	{
		id: 1,
		title: 'Curso de agricultura organica',
		date: '2024-07-17',
		excerpt: 'Aprende técnicas sostenibles para cultivar alimentos sin el uso de químicos sintéticos, promoviendo la salud del suelo, el bienestar ambiental y la producción de alimentos saludables. Descubre métodos naturales para el control de plagas, fertilización y manejo de cultivos.',
		imageUrl: 'https://enfoco.com.do/test/apps/curso1.png'
	},
	{
		id: 2,
		title: 'Curso de producción organica e inocuidad agropecuaria',
		date: '2024-07-16',
		excerpt: 'Conoce los principios y prácticas esenciales para producir alimentos orgánicos, desde la preparación del suelo y la selección de cultivos, hasta el manejo de plagas y la certificación orgánica. ',
		imageUrl: 'https://enfoco.com.do/test/apps/curso2.png'
	},
	{
		id: 3,
		title: 'Curso de manejo de plagas en la producción',
		date: '2024-07-16',
		excerpt: 'Aprende estrategias ecológicas para controlar plagas sin el uso de pesticidas químicos.',
		imageUrl: 'https://enfoco.com.do/test/apps/curso4.png'
	}
]

const CourseList: React.FC = () => {
	return (
		<div className="container mx-auto py-6">
			<h1 className="text-2xl font-bold mb-6">Capacitación</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{newsData.map(news => (
					<NewsItem
						key={news.id}
						title={news.title}
						date={news.date}
						excerpt={news.excerpt}
						imageUrl={news.imageUrl}
					/>
				))}
			</div>
		</div>
	)
}

export default CourseList