import React from 'react'

interface NewsItemProps {
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ title, date, excerpt, imageUrl }) => {
	return (
		<div className="bg-white rounded-lg shadow-md overflow-hidden">
			<img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
			<div className="p-4">
				<h2 className="text-xl font-bold mb-2">{title}</h2>
				<p className="text-gray-600 text-sm mb-2">{date}</p>
				<p className="text-gray-700 mb-4">{excerpt}</p>
				<a href="#" className="text-blue-600 hover:underline">Leer más</a>
			</div>
		</div>
	)
}

export default NewsItem
