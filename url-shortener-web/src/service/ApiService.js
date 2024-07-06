// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const apiCall = async(payload) => {
  const apiResponse = await axios(payload);
  return apiResponse.data;
};

export default apiCall;
