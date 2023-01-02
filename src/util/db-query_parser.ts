const dbQueryParser = (query: any) => {
	const {gender, brand, name, sport} = query;

	const queryObject: any = {};
	if (gender !== null) {
		queryObject.gender = {gender: {$in: gender}};
	}
	if (brand !== null) {
		queryObject.brand = {brand: {$in: brand}};
	}
	if (name !== null) {
		queryObject.name = {name: {$in: name}};
	}
	if (sport !== null) {
		queryObject.sport = {sport: {$in: sport}};
	}

	return queryObject;
};

export {dbQueryParser};
