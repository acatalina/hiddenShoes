const colours = {
	black: [1, 2, 4, 5, 7],
	white: [1, 2, 4, 7, 8, 9, 10],
	red: [2, 5, 6, 9],
	blue: [1, 3, 10],
	available: ['black', 'white', 'red', 'blue']
};

const shoes = [
	{
		id: 1,
		name: 'Trainers 1',
		img: 'trainer1.jpg',
		were: 26.99,
		price: 14.99,
		description: 'Nulla vitae elit libero, a pharetra augue.',
		available: {}
	},
	{
		id: 2,
		name: 'Trainers 2',
		img: 'trainer2.jpg',
		were: 26.99,
		price: 14.99,
		description: 'Sed posuere consectetur est at lobortis.',
		available: {}
	},
	{
		id: 3,
		name: 'Trainers 3',
		img: 'trainer3.jpg',
		were: 26.99,
		price: 14.99,
		description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
		available: {}
	},
	{
		id: 4,
		name: 'Trainers 4',
		img: 'trainer4.jpg',
		were: 26.99,
		price: 14.99,
		description: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
		available: {}
	},
	{
		id: 5,
		name: 'Trainers 5',
		img: 'trainer5.jpg',
		were: 26.99,
		price: 14.99,
		description: 'Donec sed odio dui.',
		available: {}
	},
	{
		id: 6,
		name: 'Trainers 6',
		img: 'trainer6.jpg',
		were: 26.99,
		price: 14.99,
		description: 'Cras mattis consectetur purus sit amet fermentum.',
		available: {}
	},
	{
		id: 7,
		name: 'Trainers 7',
		img: 'trainer7.jpg',
		were: 26.99,
		price: 14.99,
		description: 'Nulla vitae elit libero, a pharetra augue.',
		available: {}
	},
	{
		id: 8,
		name: 'Trainers 8',
		img: 'trainer8.jpg',
		were: 26.99,
		price: 14.99,
		description: 'Aenean lacinia bibendum nulla sed consectetur.',
		available: {}
	},
	{
		id: 9,
		name: 'Trainers 9',
		img: 'trainer9.jpg',
		were: 26.99,
		price: 14.99,
		description: 'Sed posuere consectetur est at lobortis.',
		available: {}
	},
	{
		id: 10,
		name: 'Trainers 10',
		img: 'trainer10.jpg',
		were: 26.99,
		price: 14.99,
		description: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
		available: {}
	}
];

colours.available.forEach(colour => {
	colours[colour].forEach(index => {
		shoes[index - 1].available[colour] = {
			'4.5': 8,
			5: 8,
			'5.5': 8,
			6: 8, 
			7: 8,
			8: 8,
			9: 8,
			10: 8,
			11: 8,
			12: 8,
			13: 8,
			14: 8
		};
	});
});

export default shoes;
