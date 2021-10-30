import axios from "axios";

const DEFAULT_HEADERS = {
  Accept: "application/json",
};

class Client {
  get = (url: string, headers?: { [headerName: string]: string }) => {
    return axios.get(url, {
      headers: {
        ...DEFAULT_HEADERS,
        ...headers,
      },
    });
  };

  post = (
    url: string,
    body: any,
    headers?: { [headerName: string]: string }
  ) => {
    return axios.post(url, body, {
      headers: {
        ...DEFAULT_HEADERS,
        ...headers,
      },
    });
  };

  delete = (url: string, headers?: { [headerName: string]: string }) => {
    return axios.delete(url, {
      headers: {
        ...DEFAULT_HEADERS,
        ...headers,
      },
    });
  };

  patch = (
    url: string,
    data?: any,
    headers?: { [headerName: string]: string }
  ) => {
    return axios.patch(url, data, {
      headers: {
        ...DEFAULT_HEADERS,
        ...headers,
      },
    });
  };
}

export const client = new Client();
export default client;
