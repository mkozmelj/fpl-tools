import { Team } from "@/types/team";

type TeamSelectorProps = {
  teams: Team[];
  selectedTeams: Team[];
  setSelectedTeams: (teams: Team[]) => void;
};

export function TeamSelector({
  teams,
  selectedTeams,
  setSelectedTeams,
}: Readonly<TeamSelectorProps>) {
  return (
    <div className="flex-col gap-2">
      {teams.map((team) => (
        <div
          key={team.id}
          className={`flex items-center gap-2 hover:cursor-pointer ${
            !selectedTeams.includes(team) ? "opacity-50" : ""
          }`}
          onClick={() =>
            setSelectedTeams(
              selectedTeams.includes(team)
                ? selectedTeams.filter(
                    (selectedTeam: Team) => selectedTeam !== team
                  )
                : selectedTeams.concat(team)
            )
          }
        >
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: team.color }}
          />
          <label className="w-max hover:cursor-pointer">{team.name}</label>
        </div>
      ))}
    </div>
  );
}
