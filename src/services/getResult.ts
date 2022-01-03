import { AxiosResponse } from 'axios';
import axios from './axios';

export const getResult = (): Promise<
  AxiosResponse<{
    data: boolean
  }>
> => {
  return axios.get(
    "/Events/GetResult"
  );
};
