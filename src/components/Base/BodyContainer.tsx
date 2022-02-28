import React, { ReactNode } from 'react';

const BodyContainer = ({ children }: { children: ReactNode }) => {
  return <div className="container max-w-screen-xl mx-auto flex items-center bg-main text-white min-h-[calc(100vh-5rem)] px-2 mt-3 rounded">{children}</div>;
};

export default BodyContainer;
