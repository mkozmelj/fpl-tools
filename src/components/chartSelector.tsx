import { ChartType } from "@/types/chartType";

type ChartSelectorProps = {
  chartType: ChartType;
  setChartType: (chartType: ChartType) => void;
};

export function ChartSelector({
  chartType,
  setChartType,
}: Readonly<ChartSelectorProps>): JSX.Element {
  return (
    <div className="my-2">
      <b>Chart type</b>
      <div className="flex-col w-max my-2">
        {Object.values(ChartType).map((option) => (
          <div key={option} className="flex gap-3">
            <input
              type="radio"
              name={option}
              value={option}
              checked={chartType === option}
              onChange={(event) =>
                setChartType(event.target.value as ChartType)
              }
            />
            <label className="capitalize">{option.replace("_", " ")}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
