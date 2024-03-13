import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetCatigorySmartfon = () => {
  return useQuery({
    queryKey: ["Phone"],
    queryFn: () => request.get("/Phone").then((res) => res.data),
  });
};
