import React from 'react';
import Registration from './Page/Registration/registertion.jsx';
import Login from './Page/Login/Login.jsx';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';
import RootLayout from './Components/HomeComponent/RootLayout/RootLayout.jsx';
import Home from './Page/Home/Home.jsx';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/registration"
          element={<Registration />}
        ></Route>
        <Route
          path="/login"
          element={<Login />}
        ></Route>

        {/* ================== x ================= */}
        <Route element={<RootLayout />}>
          <Route
            index
            path="/"
            element={<Home />}
          ></Route>
          <Route
            path="/chat"
            element={'chat'}
          ></Route>
          <Route
            path="/notification"
            element={'notification'}
          ></Route>
          <Route
            path="/setting"
            element={'setting'}
          ></Route>
          <Route
            path="/logout"
            element={'logout'}
          ></Route>
        </Route>
        {/* ================== x ================= */}
      </>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
};

export default App;
