import axios from 'axios';
import { toast } from 'react-toastify';
//for error
//(fullfilled state = null, errors)

axios.interceptors.response.use(null, (error) => {
	console.log('error log', error);
	const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
	if (expectedError) {
		toast.error('Expected error occured');
	} else {
		toast('Unexpected Error');
	}
	return Promise.reject(error);
	//three stages of promise
});

export default {
	get: axios.get,
	put: axios.put,
	delete: axios.delete,
	post: axios.post,
};
