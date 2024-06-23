import Typography from "@components/typography/Typography";

type NoSearchResultsProps = {
  className: string;
  search: string;
};

const NoSearchResults = ({ className, search }: NoSearchResultsProps) => {
  return (
    <div
      className={`flex flex-col justify-center items-center grow-0 bg-mono/basic-16 border border-mono/basic-10 rounded-md ${className}`}
    >
      <Typography variant="headline-md" className="text-mono/basic-1 mb-2">
        No Results Found for: {search}
      </Typography>
      <Typography variant="body-xl" className="text-[#6E6E6E]">
        We couldn't find any projects matching your search criteria. Try
        adjusting
      </Typography>
      <Typography variant="body-xl" className="text-[#6E6E6E] mb-5">
        your search terms or filters.
      </Typography>
    </div>
  );
};

export default NoSearchResults;
