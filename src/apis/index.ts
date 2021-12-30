import axios from "./shareAxios";
import { AxiosResponse } from "axios";
import { EventDate } from "../interface";
//https://api.hocvienlazada.vn/api/Events/GetCurrentEventTime

export const getEventConfig = (): Promise<
  AxiosResponse<EventDate>
> => {
  return axios.get(
    "https://api.hocvienlazada.vn/api/Events/GetCurrentEventTime"
  );
};
