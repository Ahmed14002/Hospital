import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Auth/Login';
import Main from './Pages/Main/Main';
import Home from './Pages/Home/Home';
import Donors from './Pages/Donors/Donors';
import Notification from './Pages/Notification/Notification';
import Settings from './Pages/Settings/Settings';
import RequireAuth from './Pages/Auth/RequireAuth'; // Import the RequireAuth component

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />}>
          <Route path="home" element={
            <RequireAuth allowedRoles={['HOSPITAL', 'MANGER']}>
              <Home />
            </RequireAuth>
          } />
          <Route path="donors" element={
            <RequireAuth allowedRoles={['HOSPITAL' , 'MANGER']}>
              <Donors />
            </RequireAuth>
          } />
          <Route path="notification" element={
            <RequireAuth allowedRoles={['HOSPITAL' , 'MANGER']}>
              <Notification />
            </RequireAuth>
          } />
          <Route path="settings" element={
            <RequireAuth allowedRoles={['MANGER']}>
              <Settings />
            </RequireAuth>
          } />
        </Route>
      </Routes>
    </div>
  );
}