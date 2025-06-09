import type { EClientOrderStatus } from "./request";

export interface ICreateRequest {
  providerId: string;
  items: ICreateItem[]
  status?: EClientOrderStatus;
}

export interface ICreateItem {
  productId: string;
  requestQuantity: number;
}