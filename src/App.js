import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Auth/Login';
import Main from './Pages/Main/Main';
import Home from './Pages/Home/Home';
import Donors from './Pages/Donors/Donors';
import Notification from './Pages/Notification/Notification';
import Settings from './Pages/Settings/Settings';


export default function App() {
  return (
    <div className="App">
      <Routes>
       <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />}>
          <Route path="home" element={<Home />} />
          <Route path="donors" element={<Donors />} />
          <Route path="notification" element={<Notification />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}
