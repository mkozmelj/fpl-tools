type PositionSelectorProps = {
  selectedPositions: number[];
  setSelectedPositions: (positions: number[]) => void;
};

const positions = ["Goalkeepers", "Defenders", "Midfielders", "Attackers"];

export function PositionSelector({
  selectedPositions,
  setSelectedPositions,
}: Readonly<PositionSelectorProps>): JSX.Element {
  return (
    <div className="position-selector my-2">
      <b>Positions</b>
      <div className="my-2">
        {[1, 2, 3, 4].map((position) => (
          <div className="flex gap-2" key={`position-${position}`}>
            <input
              type="checkbox"
              checked={selectedPositions.includes(position)}
              onChange={() =>
                setSelectedPositions(
                  selectedPositions.includes(position)
                    ? selectedPositions.filter(
                        (selectedPosition) => selectedPosition !== position
                      )
                    : selectedPositions.concat(position)
                )
              }
              name={`position-${position}`}
            />
            <label>{positions[position - 1]}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
