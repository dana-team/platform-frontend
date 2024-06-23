import React, { ReactNode } from "react";
type DisplayListProps = {
  children: ReactNode;
};

const DisplayList = React.memo(({ children }: DisplayListProps) => (
  <div className="flex flex-col h-full w-full grow-0">{children}</div>
));

export default DisplayList;
