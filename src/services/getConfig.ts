import { AxiosResponse } from 'axios';
import { EventDate } from '../interface';
import axios from './axios';

export const getEventConfig = (): Promise<
  AxiosResponse<EventDate>
> => {
  return axios.get(
    "/Events/GetCurrentEventTime"
  );
};
