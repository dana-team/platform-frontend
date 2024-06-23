/// <reference types="vite-plugin-svgr/client" />
import { DOTS, usePagination } from "@hooks/pagination/usePagination";

import ChevronLeft from "@/assets/chevron-left.svg?react";
import ChevronRight from "@/assets/chevron-right.svg?react";
import Typography from "@components/typography/Typography";

interface PaginationProps {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className?: string;
  isPlaceholderData: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  isPlaceholderData,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    if (!isPlaceholderData) {
      onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div className="flex items-center justify-between">
      <button
        onClick={onPrevious}
        disabled={currentPage === 1}
        className="chevron-left"
      >
        <Typography
          className={`body-sm  ${currentPage === 1 ? "text-mono/basic-10" : "text-mono/basic-4"}`}
        >
          <ChevronLeft />
        </Typography>
      </button>

      {paginationRange.map((pageNumber, i) => {
        if (typeof pageNumber === "string") {
          return (
            <div key={i} className="pagination-item dots">
              {DOTS}
            </div>
          );
        }

        return (
          <div
            key={i}
            onClick={() => onPageChange(pageNumber)}
            className="cursor-pointer"
          >
            <Typography
              variant="body-sm"
              className={`text-mono/basic-4 flex items-center pb-1 px-2 pt-1.5 hover:bg-mono/basic-12 rounded-md ${pageNumber == currentPage ? "bg-mono/basic-8" : ""}`}
            >
              {pageNumber}
            </Typography>
          </div>
        );
      })}

      <button
        onClick={onNext}
        disabled={isPlaceholderData || currentPage === lastPage}
        className="chevron-right"
      >
        <Typography
          className={` ${currentPage === lastPage ? "text-mono/basic-10" : "text-mono/basic-4"}`}
        >
          <ChevronRight />
        </Typography>
      </button>
    </div>
  );
};

export default Pagination;
