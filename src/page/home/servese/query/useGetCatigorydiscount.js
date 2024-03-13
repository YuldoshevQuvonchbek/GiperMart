import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetCatigorydiscount = () => {
  return useQuery({
    queryKey: ["discount"],
    queryFn: () => request.get("/discount").then((res) => res.data),
  });
};
