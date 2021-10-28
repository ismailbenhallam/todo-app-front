import axios from "axios";
import { BASE_URL } from "../../config/api_config";

const DEFAULT_HEADERS = {
  Accept: "application/json",
};

export default class Client {
  get = (relativeUrl: string, headers?: { [headerName: string]: string }) => {
    return axios.get(BASE_URL + relativeUrl, {
      headers: {
        ...DEFAULT_HEADERS,
        ...headers,
      },
    });
  };

  post = (
    relativeUrl: string,
    body: any,
    headers?: { [headerName: string]: string }
  ) => {
    return axios.post(BASE_URL + relativeUrl, body, {
      headers: {
        ...DEFAULT_HEADERS,
        ...headers,
      },
    });
  };

  delete = (
    relativeUrl: string,
    headers?: { [headerName: string]: string }
  ) => {
    return axios.delete(BASE_URL + relativeUrl, {
      headers: {
        ...DEFAULT_HEADERS,
        ...headers,
      },
    });
  };

  patch = (
    relativeUrl: string,
    data?: any,
    headers?: { [headerName: string]: string }
  ) => {
    return axios.patch(BASE_URL + relativeUrl, data, {
      headers: {
        ...DEFAULT_HEADERS,
        ...headers,
      },
    });
  };
}
