import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Auth/Login';
import Main from './Pages/Main/Main';
import Home from './Pages/Home/Home';
import Donors from './Pages/Donors/Donors';
import Notification from './Pages/Notification/Notification';
import Settings from './Pages/Settings/Settings';
import ProtectedRoute from './Pages/Auth/ProtectedRoutes';
import RedirectIfAuthenticated from './Pages/Auth/RedirectIfAuthenticated';
import AccessDenied from './Pages/Auth/AccessDenied';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/login"
          element={
            <RedirectIfAuthenticated>
              <Login />
            </RedirectIfAuthenticated>
          }
        />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/donors" element={<Donors />} />
          <Route path="/notification" element={<Notification />} />
          <Route element={<ProtectedRoute roles={['MANGER']} />}>
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Route>

        <Route path="/access-denied" element={<AccessDenied />} />
      </Routes>
    </div>
  );
}

