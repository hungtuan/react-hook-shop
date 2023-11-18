import { handleLogic } from "../../assets/js/script";

export default async function getProductList() {
  const { data } = await handleLogic.getListProduct({ limit: 9 });
  return data;
}
