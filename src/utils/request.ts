import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  transformRequest: [
    (data) => {
      return JSON.stringify(data);
    },
  ],
  transformResponse: [
    (data) => {
      return JSON.parse(data);
    },
  ],
});

export type RequestConfig = AxiosRequestConfig;

export type Response<T = any> = AxiosResponse<T>;

export class Request {
  constructor(private request = instance) {}

  public get<T>(url: string): Promise<Response<T>> {
    return this.request.get<T, Response<T>>(url);
  }

  public static isRequestError(error: AxiosError): boolean {
    return !!(error.response && error.response.status);
  }
}
