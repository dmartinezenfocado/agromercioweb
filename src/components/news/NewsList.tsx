import React from 'react'
import NewsItem from './NewsItem'

const newsData = [
	{
		id: 1,
		title: 'Tercera Expo Feria de la Castaña de Masa',
		date: '2024-07-17',
		excerpt: 'Viceministro Agricultura Eulalio Ramírez encabeza inauguración Tercera Expo Feria de la Castaña de Masa',
		imageUrl: 'https://enfoco.com.do/test/apps/noticia1.png'
	},
	{
		id: 2,
		title: 'Nuevos incineradores para incautaciones alimenticias',
		date: '2024-07-16',
		excerpt: 'Agricultura anuncia llegada de nuevos incineradores para incautaciones alimenticias en puertos y aeropuertos',
		imageUrl: 'https://enfoco.com.do/test/apps/noticia2.png'
	},
	{
		id: 3,
		title: 'Agricultura socorre productores de plátanos',
		date: '2024-07-16',
		excerpt: 'Agricultura socorre productores de plátanos perjudicados por los fenómenos climáticos recientes',
		imageUrl: 'https://enfoco.com.do/test/apps/noticia3.png'
	},
	{
		id: 4,
		title: 'Tecnología agropecuaria',
		date: '2024-07-16',
		excerpt: 'República Dominicana avanza en la tecnología agropecuaria',
		imageUrl: 'https://enfoco.com.do/test/apps/noticia4.png'
	},
	{
		id: 5,
		title: 'Expo Feria Internacional de la Castaña de Masa',
		date: '2024-07-16',
		excerpt: 'Tercera Expo Feria Internacional de la Castaña de Masa',
		imageUrl: 'https://enfoco.com.do/test/apps/noticia5.png'
	},
	{
		id: 6,
		title: 'Producción y protección de cacao',
		date: '2024-07-16',
		excerpt: 'Agricultura impulsa plan estratégico de producción y protección de cacao',
		imageUrl: 'https://enfoco.com.do/test/apps/noticia6.png'
	},
	{
		id: 7,
		title: 'Agricultura entrega material de siembra',
		date: '2024-07-16',
		excerpt: 'Agricultura entrega material de siembra para fortalecer Programa de Huertos Familiares y Escolares en la Región Nordeste',
		imageUrl: 'https://enfoco.com.do/test/apps/noticia7.png'
	},
	{
		id: 8,
		title: 'RD promueve el crecimiento agropecuario de la mano de Brasil',
		date: '2024-07-16',
		excerpt: 'RD promueve el crecimiento agropecuario de la mano de Brasil',
		imageUrl: 'https://enfoco.com.do/test/apps/noticia8.png'
	},
	{
		id: 9,
		title: 'Tecnología China aporta rendimiento producción arroz en RD',
		date: '2024-07-16',
		excerpt: 'Tecnología China aporta rendimiento producción arroz en RD',
		imageUrl: 'https://enfoco.com.do/test/apps/noticia9.png'
	}
]

const NewsList: React.FC = () => {
	return (
		<div className="container mx-auto py-6">
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

export default NewsList
