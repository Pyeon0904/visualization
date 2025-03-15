// CustomHooks를 위한 예시

import {useQuery} from "@tanstack/react-query";
import {queryKeys} from "@/react-query";

export default function useExampleQuery() {
  return useQuery({
    queryKey: [queryKeys.examples.exam1],
    queryFn: () => getExampleInfo(),
  });
}

export async function getExampleInfo() {
  // TODO : Fetch 구문
  // const response = await clientFetch<>({ url: `/`})
  // return response?.data ? response.data : undefined;
}