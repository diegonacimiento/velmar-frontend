"use client";
import React, { useState } from "react";

const Paginator = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleBack = () => {
    if (currentPage === 1) return;

    setCurrentPage((prev) => prev - 1);
  };

  const handleBackToTop = () => {
    setCurrentPage(1);
  };

  const handlePage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const current = Number(event.currentTarget.innerHTML);

    if (current === 1) return;

    setCurrentPage(current);
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center p-4">
      <button
        className="bt-paginator rounded-md bg-secondary p-1 w-8 text-sm text-body active:bg-primary active:text-secondary active:scale-105 duration-150"
        type="button"
        title="Back to top"
        onClick={handleBackToTop}
      >
        {"<<"}
      </button>

      <button
        className="bt-paginator rounded-md bg-secondary p-1 w-8 text-sm text-body active:bg-primary active:text-secondary active:scale-105 duration-150"
        type="button"
        title="Return a page"
        onClick={handleBack}
      >
        {"<-"}
      </button>
      {[...new Array<number>(4)].map((item, index) => (
        <button
          className={
            "bt-paginator rounded-md p-1 w-8 active:bg-primary active:text-secondary active:scale-105 duration-150 " +
            (index === 0
              ? "bg-primary text-secondary scale-105"
              : "bg-secondary text-body")
          }
          type="button"
          key={index}
          onClick={(e) => handlePage(e)}
          title={`Go to page ${currentPage + index}`}
        >
          {currentPage + index}
        </button>
      ))}
    </div>
  );
};

export default Paginator;
