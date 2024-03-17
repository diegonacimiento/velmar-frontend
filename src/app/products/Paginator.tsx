"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Paginator = ({ endPage, page }: { page: number; endPage?: boolean }) => {
  const [currentPage, setCurrentPage] = useState<number>(page);

  const router = useRouter();

  const handleBack = () => {
    if(currentPage === 1) return;
    if (currentPage === 2) {
      router.push(`/products`);
      return;
    };

    setCurrentPage((prev) => prev - 1);

    router.push(`/products/page/${currentPage - 1}`);
  };

  const handleNext = () => {
    if(endPage) return;
    setCurrentPage((prev) => prev + 1);
    router.push(`/products/page/${currentPage + 1}`);
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center p-4">
      <button
        className="bt-paginator rounded-md bg-secondary p-1 w-8 text-sm text-body active:bg-primary active:text-secondary active:scale-105 duration-150"
        type="button"
        title="Return a page"
        onClick={handleBack}
      >
        {"<-"}
      </button>

      <span className="rounded-md bg-primary p-1 w-8 text-sm text-secondary text-center duration-150">
        {currentPage}
      </span>

      <button
        className="bt-paginator rounded-md bg-secondary p-1 w-8 text-sm text-body active:bg-primary active:text-secondary active:scale-105 duration-150"
        type="button"
        title="Go to next page"
        onClick={handleNext}
      >
        {"->"}
      </button>
    </div>
  );
};

export default Paginator;
