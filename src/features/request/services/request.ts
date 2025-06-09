import packFlowApi from "@/shared/api"
import type { ICreateRequest, IRequest } from "../types"

export const getRequest = async () => {
  return await packFlowApi.get<IRequest[]>('/client-orders')
}

export const createRequest = async (data: ICreateRequest) => await packFlowApi.post('/client-orders', data)