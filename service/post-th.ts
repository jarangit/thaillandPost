import { axiosInstance } from "./axiosInstance";
import { IContentList, ISeach } from "./types/posth-th";
import { convertOBJToQS } from "./utils";

export const layoutActive = async () => {
  try {
    const res = await axiosInstance.get(`/api/v1/front/layoutActive`)
    return res
  } catch (error) {
    return null;
  }
}
export const contentList = async (param: IContentList) => {
  let paramQS = await convertOBJToQS(param)
  try {
    const res = await axiosInstance.get(`/api/v1/front/contentList?${paramQS}`)
    return res
  } catch (error) {
    return null;
  }
}
export const content = async (id: string) => {
  let mockId = 'lcgW8ZtxB4cuaxGavT6228o-4kUbhJudL6kPFF8epqw'
  try {
    const res = await axiosInstance.get(`/api/v1/front/content?contentId=${id}`)
    return res
  } catch (error) {
    return null;
  }
}
export const search = async (param: ISeach) => {
  let paramQS = await convertOBJToQS(param)
  try {
    const res = await axiosInstance.get(`/api/v1/front/search?${paramQS}`)
    return res
  } catch (error) {
    return null;
  }
}