import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetAppliances = () => {
  return useQuery({
    queryKey: ["appliances"],
    queryFn: () => request.get("/appliances").then((res) => res.data),
  });
};
