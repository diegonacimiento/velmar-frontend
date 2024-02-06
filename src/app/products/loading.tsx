import React from "react";

import Loading from "@/components/Loading";
import Search from "@/components/Search";

const loading = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <div className="w-full max-w-2k py-6">
      <div className="m-auto p-3 w-11/12 max-w-650">
        <Search />
      </div>
      <div className="flex justify-center gap-7 p-4 w-full flex-wrap">
        { array.map((e) => {
          return <div key={e} className={"flex flex-col items-center gap-8 max-w-96 p-4 border-x border-y border-secondary rounded-xl shadow-sm h-600p w-96"}>
          <Loading />
        </div>
        }) }
      </div>
    </div>
  );
};

export default loading;
