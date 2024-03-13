import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetbrand = () => {
  return useQuery({
    queryKey: ["brand"],
    queryFn: () => request.get("/brand").then((res) => res.data),
  });
};
