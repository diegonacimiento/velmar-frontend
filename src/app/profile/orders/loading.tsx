import React from "react";

const loading = () => {
  return (
    <div className="p-4 flex flex-col flex-wrap gap-6 items-center min-w-64 min-h-[30rem]">
      <h2 className="text-secondary text-2xl font-semibold">Your orders</h2>

      <div className="flex flex-wrap gap-6 justify-center py-24 border border-primary rounded-md bg-gradient-radial from-primary to-body max-w-650">
        {[1, 2, 3, 4, 5, 6].map((e) => (
          <div
            key={e}
            className="rounded-md min-w-[11.4475rem] h-32 bg-secondary bg-opacity-30 animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default loading;
