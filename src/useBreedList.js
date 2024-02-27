import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

export default function useBreedList(animal) {
  const results = useQuery({
    queryKey: ["breeds", animal],
    queryFn: fetchBreedList,
  });

  console.log(results?.data?.breeds ?? []);

  return [results?.data?.breeds ?? [], results.status];
}
