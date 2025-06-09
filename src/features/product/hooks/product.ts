import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../services/product"
import { PRODUCT_QUERY_KEYS } from "../constants/query-keys";


export const useProduct = () => {
  const query = useQuery({
    queryKey: PRODUCT_QUERY_KEYS.all,
    queryFn: getProducts,
    select: ({ data }) => data,
  });

  return query;
}
