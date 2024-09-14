import React from "react";
import Page from "./Page/registertion.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Page />
    </div>
  );
};

export default App;
