import React from 'react'

interface BadgeProps {
  title: string;
  imageUrl: string;
}

const Badge: React.FC<BadgeProps> = ({ title, imageUrl }) => {
	return (
		<div className="flex flex-col items-center">
			<img src={imageUrl} alt={title} className="w-16 h-16 rounded-full mb-2" />
			<span className="text-sm text-gray-700">{title}</span>
		</div>
	)
}

export default Badge
