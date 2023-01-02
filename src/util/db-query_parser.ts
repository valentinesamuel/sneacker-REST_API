const dbQueryParser = (query: any) => {
	const {
		gender,
		brand,
		sport,
		category,
		sizes,
		age,
		kidAge,
		collection,
		priceRange
	} = query;

	const queryObject: any = {};

	if (gender !== undefined) {
		queryObject.gender = {gender: {$in: gender}};
	}
	if (brand !== undefined) {
		queryObject.brand = {brand: {$in: brand}};
	}
	if (age !== undefined) {
		queryObject.age = {age: {$in: age}};
	}
	if (sport !== undefined) {
		queryObject.sport = {sport: {$in: sport}};
	}
	if (category !== undefined) {
		queryObject.category = {category: {$in: category}};
	}
	if (sizes !== undefined) {
		queryObject.sizes = {sizes: {$in: sizes}};
	}
	if (kidAge !== undefined) {
		queryObject.kidAge = {kidAge: {$in: kidAge}};
	}
	if (collection !== undefined) {
		queryObject.collection = {collection: {$in: collection}};
	}
	if (priceRange !== undefined) {
		const lowestPrice = priceRange[0];
		const highestPrice = priceRange[1];
		queryObject.price = {
			$gte: lowestPrice,
			$lte: highestPrice
		};
	}
	return queryObject;
};

const dbQueryOrderParser = (query: any) => {
	const {priceorder} = query;

	const queryOrder: any = {};
	if (priceorder !== undefined && priceorder === 'asc') {
		queryOrder.price = 1;
	} else if (priceorder !== undefined && priceorder === 'desc') {
		queryOrder.price = -1;
	}

	return queryOrder;
};

export {dbQueryParser, dbQueryOrderParser};
