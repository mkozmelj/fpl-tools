import { PaginationData } from "@/types/paginationData";
import { Player } from "@/types/player";
import { handleError } from "@/utils/handleError";
import axios, { AxiosResponse } from "axios";

export async function fetchPlayers(
  positions: number[],
  callback: (players: PaginationData<Player>) => void
): Promise<void> {
  axios
    .get(
      import.meta.env.VITE_API_URL +
        `players${positions.length ? `?positions=${positions.join(",")}` : ""}`
    )
    .then((response: AxiosResponse) => callback(response.data))
    .catch(handleError);
}
