export const convertOBJToQS = async (obj: any) => {
  let result = new URLSearchParams({ ...obj }).toString();
  return result
}