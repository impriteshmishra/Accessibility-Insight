import axiosInstance from "../utils/axiosInstance";


export const scanUrl = async (url) => {
  // console.log("api",url)
  const response = await axiosInstance.post(
    "/api/v1/url/scan",
    { url: url }
  );
  // console.log("api response", response.data);
  

  return response.data;
}