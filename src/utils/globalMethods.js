
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

/**
 * Generates a unique identifier in the format "XXXX-XXXX", where X represents a random number.
 *
 * @function generateId
 * @returns {string} - A unique identifier in the format "XXXX-XXXX".
 *
 * @example
 * const uniqueId = generateId();
 * console.log(uniqueId); // Output: "1234-5678"
 */
export function generateId() {
	return `${Math.floor(Math.random() * 10000)}-${Math.floor(Math.random() * 10000)}`;
}

/**
 * Exports an object to a Markdown file.
 *
 * @function exportToMarkdownFile
 * @param {object} obj - The object to be exported.
 * @param {string} obj.title - The title of the Markdown file.
 * @param {string} [obj.date] - The date of the Markdown file. Default is the current date.
 * @param {string} [obj.tag] - The tag of the Markdown file. Default is "Nessun tag".
 * @param {string} [obj.content] - The content of the Markdown file. Default is "Nessun contenuto disponibile."
 * @returns {void}
 *
 * @example
 * const data = {
 *   title: "My Markdown File",
 *   date: "2022-01-01",
 *   tag: "JavaScript",
 *   content: "This is my markdown content."
 * };
 * exportToMarkdownFile(data);
 */
export function exportToMarkdownFile(obj) {

	const {
		title = "untitled",
		date = Date.now(),
		tag = "",
		content = "Nessun contenuto disponibile."
	} = obj;

	if (!obj) {
		console.error("Ops! There isn't any note.");
		return;
	}

	const formattedDate = new Date(date).toLocaleString();
	const tagSection = tag ? `## ${tag}\n\n` : "";

	const markdownContent =
		`# ${title}

**Date:** ${formattedDate}

${tagSection}---
${content}`;

	const blob = new Blob([markdownContent], { type: "text/markdown" });
	const link = document.createElement("a");
	link.href = URL.createObjectURL(blob);
	link.download = `${title}.md`;
	link.click();

	URL.revokeObjectURL(link.href);
}