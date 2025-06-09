import packFlowApi from "../../../shared/api"
import type { IProduct, IProductForm, IProductUpdate } from "../types/product"


export const getProducts = () => {
  return packFlowApi.get<IProduct[]>('/products')
}

export const createProduct = async (data: IProductForm) => {
  return await packFlowApi.post('/products', data)
}

export const updateProduct = async ({ productId, data }: {productId: string, data: IProductUpdate}) => {
  return await packFlowApi.patch(`/products/${productId}`, data);
}