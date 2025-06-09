import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createProduct, updateProduct } from "../services/product";
import { PRODUCT_QUERY_KEYS } from "../constants/query-keys";

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: PRODUCT_QUERY_KEYS.create,
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PRODUCT_QUERY_KEYS.all });
    }
  });
}

export const useUpdateProduct = () => {
  const queryCLient = useQueryClient();

  return useMutation({
    mutationKey: PRODUCT_QUERY_KEYS.update,
    mutationFn: updateProduct,
    onSuccess: () => {
      queryCLient.invalidateQueries({ queryKey: PRODUCT_QUERY_KEYS.all })
    }
  })

}