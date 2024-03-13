import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetALLdata = (search = "") => {
  return useQuery({
    queryKey: ["allpradact", search],
    queryFn: () =>
      request
        .get(`/allpradact`, { params: { title_like: search } })
        .then((res) => res.data),
  });
};
