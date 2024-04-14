import { axiosInstance } from "./helper";

export const GET_ALL_COURSES = async ({queryKey}) => {
 const[_,category]=queryKey
 console.log(category?.category)

  return await axiosInstance.get(`/course`);
};

export const GET_ALL_CATEGORIES = async () => {
  return await axiosInstance.get("course/getAllCategory");
};

export const GET_SINGLE_COURSE = async (id) => {
  return await axiosInstance.get(`/course/getSingleCourse/${id}`);
};

export const GET_VIDEO_URL = async (data) => {
  return await axiosInstance.get(
    `/course/${data.courseId}/section/${data.sectionId}/sub-section/${data.subsectionId}`
  );
};

export const GET_FILTERS_COURSE=async(data)=>{
  return axiosInstance.get(`${data}`)
}
