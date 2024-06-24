import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Auth/Login';
import Main from './Pages/Main/Main';
import Home from './Pages/Home/Home';
import Donors from './Pages/Donors/Donors';
import Settings from './Pages/Settings/Settings';
import Notification from './Pages/Notification/Notification';
import { ProtectedLogin, ProtectedSettings } from './Pages/Auth/ProtectedRoutes';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<ProtectedLogin />}>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="/" element={<Main />}>
        <Route path="home" element={<Home />} />
        <Route path="donors" element={<Donors />} />
        <Route path="notification" element={<Notification />} />
        <Route element={<ProtectedSettings />}>
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  );
}
