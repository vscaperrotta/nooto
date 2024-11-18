
/**
 * * Handling the API Rest resposnse, and return data and different message for status code
 * @name handlingResponse
 * @param {object} data - The response of method
 * @return {object} - The response of method, with additional info
 */
export const handlingResponse = (data) => {
	const response = { error: '' };

	if (data && !/ok/i.test(data.statusText)) {
		switch (data.status) {
			case 401:
				data.type = 'Unauthorized';
				break;
			case 404:
				data.type = 'Not Found';
				break;
			case 500:
				data.type = 'ServerError';
				break;
			default:
				data.type = 'Invalid Data';
				break;
		}
		return { response, error: data };
	}
	return { response: data };
};

/**
 * * Handling the null case and set to safe
 *
 * @name nullSafe
 * @param {function} func
 * @param {*} fallbackValue
 * @returns {*} the value to set safe the method
 */
export const nullSafe = (func, fallbackValue) => {
	try {
		const value = func();
		return value === null || value === undefined ? fallbackValue : value;
	} catch (e) {
		return fallbackValue;
	}
};

/**
 * Creates an action object with a type and payload.
 *
 * @function createAction
 * @param {string} type - The type of the action.
 * @param {object} [payload={}] - The payload of the action. Default is an empty object.
 * @returns {object} - An action object with type and payload properties.
 *
 * @example
 * const action = createAction('ADD_ITEM', { id: 1, name: 'Apple' });
 * console.log(action); // { type: 'ADD_ITEM', payload: { id: 1, name: 'Apple' } }
 */
export function createAction(type, payload = {}) {
	return {
		type,
		payload,
	};
}

export function generateId() {
	return `${Math.floor(Math.random() * 10000)}-${Math.floor(Math.random() * 10000)}`;
}
