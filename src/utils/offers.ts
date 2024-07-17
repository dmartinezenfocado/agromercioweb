interface Offer {
    id: number
    name: string
    previousPrice: number
    price: number
    discount: number
    freeShipping: boolean
    full: boolean
    img: string
		dues: boolean
}

export const offers: Offer[] = [
	{
		id: 1,
		name: 'Platanos barahoneros',
		previousPrice: 122.488,
		price: 109.999,
		discount: 10,
		freeShipping: true,
		full: true,
		dues: true,
		img: 'https://enfoco.com.do/test/apps/platanos3.png'
	},
	{
		id: 2,
		name: 'Manzanas don pedro',
		previousPrice: 84.999,
		price: 77.899,
		discount: 8,
		freeShipping: false,
		full: false,
		dues: false,
		img: 'https://enfoco.com.do/test/apps/manzanas.png'
	},
	{
		id: 3,
		name: 'Naranjas 100%',
		previousPrice: 38.869,
		price: 28.990,
		discount: 25,
		freeShipping: false,
		full: false,
		dues: false,
		img: 'https://enfoco.com.do/test/apps/naranjas.png'
	},
	{
		id: 5,
		name: 'Pepinos fresco',
		previousPrice: 6.441,
		price: 6.441,
		discount: 0,
		freeShipping: true,
		dues: false,
		full: false,
		img: 'https://enfoco.com.do/test/apps/pepinos.png'
	},
	{
		id: 6,
		name: 'Trigo especial',
		previousPrice: 64.999,
		price: 50.879,
		discount: 21,
		freeShipping: false,
		dues: false,
		full: false,
		img: 'https://enfoco.com.do/test/apps/trigo.png'
	},
	{
		id: 7,
		name: 'Huevos Criollos',
		previousPrice: 38.430,
		price: 30.744,
		discount: 8,
		freeShipping: true,
		dues: false,
		full: false,
		img: 'https://enfoco.com.do/test/apps/huevos.png'
	},
	{
		id: 8,
		name: 'Café enriquillo',
		previousPrice: 42.499,
		price: 42.499,
		discount: 0,
		freeShipping: false,
		dues: false,
		full: true,
		img: 'https://enfoco.com.do/test/apps/cafe.png'
	},
	{
		id: 9,
		name: 'Leche de vaca',
		previousPrice: 10.080,
		price: 8.890,
		discount: 11,
		freeShipping: true,
		dues: false,
		full: true,
		img: 'https://enfoco.com.do/test/apps/leche.png'
	},
	{
		id: 10,
		name: 'Yuca de la buena',
		previousPrice: 66.838,
		price: 56.813,
		discount: 14,
		freeShipping: false,
		dues: false,
		full: false,
		img: 'https://enfoco.com.do/test/apps/yuca.png'
	},
	{
		id: 11,
		name: 'Tomates frescos',
		previousPrice: 8.999,
		price: 7.525,
		discount: 16,
		freeShipping: true,
		dues: false,
		full: false,
		img: 'https://enfoco.com.do/test/apps/tomates.png'
	}
]
