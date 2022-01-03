import axios from "./axios";

const shopRegister = (data: any) =>
  axios.post<{
    data: string;
    message: string;
    success: boolean;
  }>(`/Events/Register`, data);

export default shopRegister;
