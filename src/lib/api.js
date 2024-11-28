import axios from "axios";

let privateApi = null;
let publicApi = null;

async function createApi(headers) {
  return axios.create({
    timeout: 8000,
    headers: {
      //   device_token: await getDeviceToken(),
      ...headers,
    },
  });
}

async function apiRequest(api, method, url, reqData, config) {
  try {
    const response = await api.request({ method, url, data: reqData, config });
    return response.data;
  } catch (error) {
    if (error) {
      const { message } = error.response.data;
      console.log(message);
    }
    throw error;
  }
}

async function checkDeviceToken() {
  if (publicApi) return;

  publicApi = await createApi({
    "accept-language": "en-US",
  });
}

export async function publicApiGet(url, reqData) {
  await checkDeviceToken();
  return apiRequest(publicApi, "GET", url, reqData);
}

export async function publicApiPost(url, reqData) {
  await checkDeviceToken();
  return apiRequest(publicApi, "POST", url, reqData);
}

export async function apiGet(url, reqData) {
  await checkAuth();
  return apiRequest(privateApi, "GET", url, reqData);
}
export async function apiPost(url, reqData) {
  await checkAuth();
  return apiRequest(privateApi, "POST", url, reqData);
}

// TESTING
export const fetchProductFakeData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(PRODUCT_DETAIL_DATA);
    }, 1000); // Simulate a network delay of 1 second
  });
};
