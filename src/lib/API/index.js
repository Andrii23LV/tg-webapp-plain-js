const BOT_SERVER_URL = 'https://parserdev.duckdns.org/dataserver';

const sendRequest = async (
	method,
	endpoint,
	data,
	cookies,
	baseUrl,
) => {
	const url = `${baseUrl ? baseUrl : BOT_SERVER_URL}${endpoint}`;

	let headers = {};

	if (data instanceof FormData) {
		if (data.has('img')) {
			headers['Content-Type'] = 'multipart/form-data';
		} else {
			headers['Content-Type'] = 'application/x-www-form-urlencoded';
		}
	} else {
		headers['Content-Type'] = 'application/json';
	}

	try {
		const requestOptions = {
			method,
			credentials: 'include',
			headers,
			cookies: cookies ? cookies : null,
		};

		if (method === "POST" && data !== undefined) {
			if (data instanceof FormData) {
				requestOptions.body = data;
			} else {
				requestOptions.body = JSON.stringify(data);
			}
		}

		const response = await fetch(url, requestOptions);

		if (!response.ok) {
			return {
				success: false,
				status: response.status,
				message: `Request failed with status ${response.status}`,
			};
		}

		return { success: true, message: await response.json(), status: response.status };
	} catch (error) {
		console.log('Error during request:', error.message);
		return { success: false, message: error.message };
	}
};

export const toggleAutoposting = async (
	channelIDs,
	toggle,
	settings
) => {
	const method = 'POST';

	if (!channelIDs || toggle === undefined) {
		throw new Error('Missing required parameters for toggleAutoposting');
	}
	const idsArray = Array.isArray(channelIDs) ? channelIDs : [channelIDs];

	const promises = idsArray.map(async (channelID) => {
		const endpoint = '/autoposting/toggle';
		return sendRequest(method, endpoint,
			{
				id: channelID,
				autopost: toggle,
				autopost_interval: settings.interval,
			}
		);
	});

	const responses = await Promise.all(promises);

	return responses[0];
};

export const handPosting = async (
	channelID,
	settings
) => {
	const method = 'POST';

	if (!channelID || !settings) {
		throw new Error('Missing required parameters for handPosting');
	}

	const formData = new FormData();
	formData.append('text', settings.text);
	formData.append('contacts', JSON.stringify(settings.contacts));

	if (settings.image) {
		formData.append('img', settings.image);
	}

	const endpoint = `/autoposting/sendPost/?channel_id=${channelID}`;
	return sendRequest(method, endpoint, formData);
};

export const getChannels = () => {
	const method = 'GET';

	const endpoint = `/channels/all`;
	return sendRequest(method, endpoint);
}

export const getChannelsFilteredBy = (data) => {
	const method = 'GET';

	const endpoint = `/channels/${data.user_id}/filtered-by?filter_key=${data.filter_key}&filter_value=${data.filter_value}`;
	return sendRequest(method, endpoint);
}

export const addChannel = (settings) => {
	const method = 'POST';

	const endpoint = `/channels/add`;
	return sendRequest(method, endpoint, settings);
}

export const deleteChannel = (id) => {
	const method = 'DELETE';

	const endpoint = `/channels/del/?channel_id=${id}`;
	return sendRequest(method, endpoint);
}

export const addBot = (settings) => {
	const method = 'POST';

	const endpoint = `/bot/add`;
	return sendRequest(method, endpoint, settings);
}

export const deleteBot = (id) => {
	const method = 'DELETE';

	const endpoint = `/bots/del/?bot_id=${id}`;
	return sendRequest(method, endpoint);
}

export const addLocationByGroupId = (settings) => {
	const method = 'POST';

	const endpoint = '/location-add';
	return sendRequest(method, endpoint, settings);
}

export const getLocationsAll = () => {
	const method = 'GET';

	const endpoint = `/locations/all`;
	return sendRequest(method, endpoint);
}

export const getLocationByLocationGroup = (parsing_domain) => {
	const method = 'GET';

	const endpoint = `/locations/find-by/location-group/?parsing_domain=${parsing_domain}`;
	return sendRequest(method, endpoint);
}

export const getAllLocationGroups = () => {
	const method = 'GET';

	const endpoint = `/locations/location-groups/all`;
	return sendRequest(method, endpoint);
}

export const getBots = () => {
	const method = 'GET';

	const endpoint = `/bot/find-by/user`;
	return sendRequest(method, endpoint);
}

export const initializeTelegramUser = (webApp) => {
	const method = 'POST';

	if (!webApp) {
		throw new Error('Missing WebApp for initializeTelegramUser');
	}

	const endpoint = `/account/check-user`;
	return sendRequest(method, endpoint, { auth: webApp.initData });
}
