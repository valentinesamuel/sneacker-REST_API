import {ObjectIndexer} from '../../types/utility.types';

// http://localhost:00/api/v1/shop?gender=male+female&brand=nike+puma+diadora&price=asc&name=High%Tight+Nike%Kyrie%2&sport=basketball+football+American%Football+track%and%field'

const convertStringToObject = (queryString: string) => {
	const queryObject: ObjectIndexer = {};
	queryString.split('&').forEach((query) => {
		const key = query.split('=')[0];
		const value = query.split('=')[1];
		if (key === 'priceorder') {
			queryObject[key] = value;
		} else {
			queryObject[key] = value.replace(/%/g, ' ').split('+');
		}
	});
	return queryObject;
};

export {convertStringToObject};
