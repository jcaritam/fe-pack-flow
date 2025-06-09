import { useQuery } from "@tanstack/react-query"
import { getRequest } from "../services/request"
import { REQUEST_QUERY_KEYS } from "../constants/query-keys"

export const useRequest = () => {
  return useQuery({
    queryKey: REQUEST_QUERY_KEYS.all,
    queryFn: getRequest,
    select: ({ data }) => {
      return data
    }
  })
}