import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetCars = () => {
  return useQuery({
    queryKey: ["avto"],
    queryFn: () => request.get("/avto").then((res) => res.data),
  });
};
