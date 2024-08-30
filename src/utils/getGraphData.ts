import { Player } from "@/types/player";
import { getColorBasedOnTeam } from "./getColorBasedOnTeam";

export function getGraphData(
  players: Player[],
  x: keyof Player,
  y: keyof Player
) {
  return players.map((player) => ({
    x: player[x],
    y: player[y],
    label: player.web_name,
    color: getColorBasedOnTeam(player.team_code),
    team: player.team_code,
  }));
}
