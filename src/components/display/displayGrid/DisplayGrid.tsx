/// <reference types="vite-plugin-svgr/client" />
import React, { ReactNode } from "react";

type DisplayGridProps = {
  children: ReactNode;
};

const DisplayGrid = React.memo(({ children }: DisplayGridProps) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-1.5 grid-row-3 auto-rows-min h-full w-full">
    {children}
  </div>
));

export default DisplayGrid;
