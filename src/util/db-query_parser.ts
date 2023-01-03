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
		queryObject.gender = {$in: gender};
	}
	if (brand !== undefined) {
		queryObject.brand = {$in: brand};
	}
	if (age !== undefined) {
		queryObject.age = {$in: age};
	}
	if (sport !== undefined) {
		queryObject.sport = {$in: sport};
	}
	if (category !== undefined) {
		queryObject.category = {$in: category};
	}
	if (sizes !== undefined) {
		queryObject.sizes = {$in: sizes};
	}
	if (kidAge !== undefined) {
		queryObject.kidAge = {$in: kidAge};
	}
	if (collection !== undefined) {
		queryObject.collection = {$in: collection};
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
