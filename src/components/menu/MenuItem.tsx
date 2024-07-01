import React, { ReactNode } from "react";

type menuItemProps = {
  children: ReactNode;
};

const MenuItem = React.memo(({ children }: menuItemProps) => (
  <div className="px-1.5 py-1.25 hover:bg-mono/basic-13 focus:bg-mono/basic-14 focus:text-mono/basic-1 rounded-md cursor-pointer">
    {children}
  </div>
));

export default MenuItem;
