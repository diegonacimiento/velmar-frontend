"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface PaginatorProps {
  pageNumber: number;
  isLastPage?: boolean;
  url: string;
}

const Paginator: React.FC<PaginatorProps> = ({
  pageNumber,
  isLastPage,
  url,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(pageNumber);

  const router = useRouter();

  const handleBackPage = () => {
    // Si estamos en la página 1 retornamos
    if (currentPage === 1) return;
    // Si estamos en la página 2 y queremos volver a la 1
    if (currentPage === 2) {
      // Sacamos /page de la url
      const returnPage = url.replace("/page", "");
      router.push(returnPage);
      return;
    }
    setCurrentPage((prev) => prev - 1);
    router.push(`${url}/${currentPage - 1}`);
  };

  const handleNextPage = () => {
    if (isLastPage) return; // si es la última página retornamos
    setCurrentPage((prev) => prev + 1);
    router.push(`${url}/${currentPage + 1}`);
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center p-4">
      <button
        className={
          "bt-paginator rounded-md bg-secondary p-1 w-8 text-sm text-body active:bg-primary active:text-secondary active:scale-105 duration-150 " +
          (pageNumber === 1 && "opacity-0 cursor-default")
        }
        type="button"
        title="Return a page"
        onClick={handleBackPage}
      >
        {"<-"}
      </button>

      <span className="rounded-md bg-primary p-1 w-8 text-sm text-secondary text-center select-none duration-150">
        {currentPage}
      </span>

      <button
        className={
          "bt-paginator rounded-md bg-secondary p-1 w-8 text-sm text-body active:bg-primary active:text-secondary active:scale-105 duration-150 " +
          (isLastPage && "opacity-0 cursor-default")
        }
        type="button"
        title="Go to next page"
        onClick={handleNextPage}
      >
        {"->"}
      </button>
    </div>
  );
};

export default Paginator;
