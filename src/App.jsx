import React from "react";
import MainRouters from "./pages";
import { Toaster } from "react-hot-toast";

const App = () => {
   return (
      <>
         <MainRouters />
         <Toaster position="top-right" reverseOrder={false} />
      </>
   );
};

export default App;
