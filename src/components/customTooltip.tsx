type TooltipProps = {
  payload?: {
    value: number;
    name: string;
    payload: { x: number; y: number; label: string };
  }[];
  active?: boolean;
};

export const CustomTooltip = ({
  payload,
  active,
}: Readonly<TooltipProps>): JSX.Element => {
  if (active) {
    return (
      <div className="custom-tooltip bg-white">
        <b>{payload?.[0].payload.label}</b>
        {payload?.map((data) => (
          <p className="desc capitalize">
            {data.name.replace("_", " ")}: {data.value}
          </p>
        ))}
      </div>
    );
  }

  return <></>;
};
