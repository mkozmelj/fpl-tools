import DefaultLayout from "@/layouts/default";
import { useEffect, useState } from "react";
import { Player } from "@/types/player";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { CustomTooltip } from "@/components/customTooltip";
import { getGraphData } from "@/utils/getGraphData";
import { ChartSelector } from "@/components/chartSelector";
import { ChartType } from "@/types/chartType";
import { getAxisBasedOnChartType } from "@/utils/getAxisBasedOnChartType";
import { Axis } from "@/types/axis";
import { PositionSelector } from "@/components/positionSelector";
import { fetchPlayers } from "@/api/players";
import { PaginationData } from "@/types/paginationData";
import { fetchTeams } from "@/api/teams";
import { Team } from "@/types/team";
import { TeamSelector } from "@/components/teamSelector";

export default function IndexPage() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [selectedTeams, setSelectedTeams] = useState<Team[]>([]);
  const [chartType, setChartType] = useState<ChartType>(ChartType.GOALS);
  const [axis, setAxis] = useState<Axis>(
    getAxisBasedOnChartType(ChartType.GOALS)
  );
  const [selectedPositions, setSelectedPositions] = useState<number[]>([
    1, 2, 3, 4,
  ]);

  useEffect(() => {
    fetchPlayers(selectedPositions, (response: PaginationData<Player>) =>
      setPlayers(response.data)
    );
  }, [selectedPositions]);

  useEffect(() => {
    fetchTeams((response: Team[]) => {
      setTeams(response);
      setSelectedTeams(response);
    });
  }, []);

  useEffect(() => {
    setAxis(getAxisBasedOnChartType(chartType));
  }, [chartType]);

  return (
    <DefaultLayout>
      <div className="flex h-full gap-8">
        <div>
          <ChartSelector chartType={chartType} setChartType={setChartType} />
          <hr />
          <PositionSelector
            selectedPositions={selectedPositions}
            setSelectedPositions={setSelectedPositions}
          />
        </div>
        <ResponsiveContainer width="100%">
          <ScatterChart>
            <XAxis type="number" dataKey="x" name={axis.x} />
            <YAxis type="number" dataKey="y" name={axis.y} />

            <Tooltip content={<CustomTooltip />} />
            {getGraphData(
              players.filter((player) =>
                selectedTeams.map((team) => team.id).includes(player.team)
              ),
              axis.x,
              axis.y
            ).map((entry, index) => (
              <Scatter
                key={`scatter-${index}`}
                data={[entry]}
                fill={entry.color}
              />
            ))}
          </ScatterChart>
        </ResponsiveContainer>
        <TeamSelector
          teams={teams}
          selectedTeams={selectedTeams}
          setSelectedTeams={setSelectedTeams}
        />
      </div>
    </DefaultLayout>
  );
}
