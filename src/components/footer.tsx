export function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  // Function to determine the year range for copyright
  const getCopyrightYearRange = (year: number) => {
    return year !== 2024 ? `2024 - ${year}` : "2024";
  };

  return (
    <div className="bg-secondary">
      <footer className="container mx-auto max-w-7xl px-6 p-2 flex gap-3 justify-end">
        <div className=" w-max">{`© ${getCopyrightYearRange(
          currentYear
        )}`}</div>
        -
        <a
          className="w-max text-primary"
          href="https://kozmelj.si"
          target="_blank"
          rel="noopener noreferrer"
        >
          kozmelj.si
        </a>
        -<div className="w-max">All rights reserved.</div>
      </footer>
    </div>
  );
}
