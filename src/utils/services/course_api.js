import { axiosInstance } from "./helper";

export const GET_ALL_COURSES = async () => {
  return await axiosInstance.get("/course");
};
