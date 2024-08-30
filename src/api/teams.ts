import { Team } from "@/types/team";
import { handleError } from "@/utils/handleError";
import axios, { AxiosResponse } from "axios";

export async function fetchTeams(
  callback: (teams: Team[]) => void
): Promise<void> {
  axios
    .get(import.meta.env.VITE_API_URL + "teams")
    .then((response: AxiosResponse) => callback(response.data))
    .catch(handleError);
}
