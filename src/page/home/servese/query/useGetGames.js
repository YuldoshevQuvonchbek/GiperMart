import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetGames = () => {
  return useQuery({
    queryKey: ["games"],
    queryFn: () => request.get("/games").then((res) => res.data),
  });
};
