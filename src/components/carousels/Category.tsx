import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import { useAppDispatch } from '../../hooks/reduxHooks'
import { categoryIcons, categorySettings } from '../../utils'
// import { useGetCategoriesQuery } from '../../api/meliApi'
// import { useEffect } from 'react'
// import { setCategories } from '../../slices/categorySlice'

export const Category = () => {
	// const categories = useAppSelector((state) => state.categories.categories)

	const categories = [
		{
			id: 1,
			name: 'Frutas',
			icon: ''
		},
		{
			id: 2,
			name: 'Verduras',
			icon: ''
		},
		{
			id: 3,
			name: 'Granos y Cereales',
			icon: ''
		},
		{
			id: 4,
			name: 'Legumbres',
			icon: ''
		},
		{
			id: 5,
			name: 'Tubérculos',
			icon: ''
		},
		{
			id: 6,
			name: 'Frutos Secos',
			icon: ''
		},
		{
			id: 7,
			name: 'Hierbas y Especias',
			icon: ''
		},
		{
			id: 8,
			name: 'Productos Lácteos',
			icon: ''
		},
		{
			id: 9,
			name: 'Productos Cárnicos',
			icon: ''
		},
		{
			id: 10,
			name: 'Pescados y Mariscos',
			icon: ''
		},
		{
			id: 11,
			name: 'Flores y Plantas',
			icon: ''
		},
		{
			id: 12,
			name: 'Hierbas Medicinales',
			icon: ''
		},
		{
			id: 13,
			name: 'Frutos Exóticos',
			icon: ''
		},
		{
			id: 14,
			name: 'Productos Apícolas',
			icon: ''
		},
		{
			id: 15,
			name: 'Setas y Hongos',
			icon: ''
		},
		{
			id: 16,
			name: 'Aceites Esenciales',
			icon: ''
		},
		{
			id: 17,
			name: 'Frutos Secos y Deshidratados',
			icon: ''
		},
		{
			id: 18,
			name: 'Productos Derivados del Coco',
			icon: ''
		},
		{
			id: 19,
			name: 'Productos Fermentados',
			icon: ''
		},
		{
			id: 20,
			name: 'Productos Orgánicos',
			icon: ''
		}
	]

	// const dispatch = useAppDispatch()
	// const { isLoading, data } = useGetCategoriesQuery()

	// useEffect(() => {
	// 	const fillCategories = () => {
	// 		if (data !== undefined) {
	// 			dispatch(setCategories(data))
	// 		}
	// 	}
	// 	fillCategories()
	// }, [isLoading])

	return (
		<>
			<div className="w-full text-gray-700 flex flex-col rounded-md h-auto m-auto relative">
				{categories.length > 0 && (
					<section className="w-full max-w-homescreen m-auto category-slider">
						<h2 className="text-gray-600 text-left mb-5 text-2xl font-light">
              Categorías populares
						</h2>
						<Slider
							{...categorySettings}
							className="m-auto shadow-xl max-w-homescreen"
						>
							{categories.map((category) => (
								<a
									href="/"
									key={category['id']}
									className="gap-10 h-40 border text-lg max-w-6xl bg-white hover:bg-blue-500 hover:text-white cursor-pointer pt-7 category-card"
								>
									{categoryIcons[`${'MLA1512'}`]}
									<span className="whitespace-nowrap w-full text-ellipsis text-sm font-normal">
										{category['name']}
									</span>
								</a>
							))}
						</Slider>
					</section>
				)}
			</div>
		</>
	)
}
