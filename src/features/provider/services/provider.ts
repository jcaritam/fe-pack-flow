import packFlowApi from "@/shared/api";
import type { IProvider } from "../types";


export const getProviders = async () => await packFlowApi.get<IProvider[]>('/providers')