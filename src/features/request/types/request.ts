import type { IProduct } from "@/features/product/types/product";
import type { IProvider } from "@/features/provider/types";


export const EClientOrderStatus = {
  // Estados iniciales
  DRAFT: "DRAFT",                    // Borrador, aún no enviada
  SENT: "SENT",                      // Enviada al proveedor
  
  // Estados de confirmación del proveedor
  PARTIALLY_CONFIRMED: "PARTIALLY_CONFIRMED", // Proveedor confirma solo parte
  CONFIRMED: "CONFIRMED",            // Proveedor confirma todo
  
  // Estados de envío y recepción
  IN_TRANSIT: "IN_TRANSIT",          // En camino
  PARTIALLY_RECEIVED: "PARTIALLY_RECEIVED", // ⭐ NUEVO: Recibido parcialmente
  RECEIVED: "RECEIVED",              // Recibido completamente
  
  // Estados especiales
  PENDING_COMPLETION: "PENDING_COMPLETION", // ⭐ NUEVO: Esperando el resto
  CANCELLED: "CANCELLED",            // Cancelada
} as const;

export type EClientOrderStatus = typeof EClientOrderStatus[keyof typeof EClientOrderStatus];


export interface IRequest {
	clientOrderId: string;
	provider: Omit<IProvider, 'providerId' | 'isActive' | 'createdAt'>;
	items: IItem[];
	orderDate: string;
	status: EClientOrderStatus;
}

interface IItem {
	clientOrderItemId: string;
	product: Omit<IProduct, 'productId' | 'description' | 'category' | 'isActive' | 'createdAt'>;
	requestQuantity: number;
	isConfirmed: boolean;
	confirmedQuantity: number | null;
	confirmedUnitCost: number | null
}
