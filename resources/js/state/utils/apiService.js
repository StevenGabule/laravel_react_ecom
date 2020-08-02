import axiosInstance from '../../axiosConfig';

const api = async ({ payload, meta }) => {
  const { url, method } = meta;
  try {
    const response = await axiosInstance({ method, url, data: payload });
    console.log(response);
    return { data: response.data };
  } catch (err) {
    return { error: err };
  }
};

export default api;
