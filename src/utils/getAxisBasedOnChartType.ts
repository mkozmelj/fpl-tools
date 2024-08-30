import { ChartType } from "@/types/chartType";
import { Player } from "@/types/player";

export function getAxisBasedOnChartType(chartType: ChartType): {
  x: keyof Player;
  y: keyof Player;
} {
  switch (chartType) {
    case ChartType.GOALS:
      return {
        x: "goals_scored",
        y: "expected_goals",
      };
    case ChartType.ASSISTS:
      return {
        x: "assists",
        y: "expected_assists",
      };
    case ChartType.GOALS_CONCEDED:
      return {
        x: "goals_conceded",
        y: "expected_goals_conceded",
      };
    default:
      return {
        x: "goal_involvements",
        y: "expected_goal_involvements",
      };
  }
}
