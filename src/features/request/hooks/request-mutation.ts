import { useMutation, useQueryClient } from "@tanstack/react-query"
import { REQUEST_QUERY_KEYS } from "../constants/query-keys";
import { createRequest } from "../services";

export const useCreateRequest = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: REQUEST_QUERY_KEYS.create,
    mutationFn: createRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: REQUEST_QUERY_KEYS.all })
    }
  })
}

export const useUpdateRequest = () => {
  // const queryClient = useQueryClient();
  // return useMutation
}