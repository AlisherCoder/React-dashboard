import React from "react";

export const Loading = () => {
   return (
      <div>
         <p>Loading...</p>
      </div>
   );
};

export const Suspense = (children) => {
   return <React.Suspense fallback={<Loading />}>{children}</React.Suspense>;
};
