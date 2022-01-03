import axios from "./axios";

const submitCode = (data: { badgeType: number; code: string }) =>
  axios.post<{
    data: string;
    message: string;
    success: boolean;
  }>(`/Events/Badge`, data);

export default submitCode;
