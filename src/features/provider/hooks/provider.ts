import { useQuery } from "@tanstack/react-query"
import { getProviders } from "../services"
import { PROVIDER_QUERY_KEYS } from "../constants/query-keys"

interface IParams {
  enabled?: boolean
}

export const useProviders = ({ enabled = true }: IParams = {}) => {
  const { data, ...res } = useQuery({
    queryKey: PROVIDER_QUERY_KEYS.all,
    queryFn: getProviders,
    enabled,
    select: ({ data }) => data, 
  });

  return {
    providers: data,
    ...res
  }
}