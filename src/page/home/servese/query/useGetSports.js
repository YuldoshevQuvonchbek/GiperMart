import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetSports = () => {
  return useQuery({
    queryKey: ["sports"],
    queryFn: () => request.get("/sports").then((res) => res.data),
  });
};
