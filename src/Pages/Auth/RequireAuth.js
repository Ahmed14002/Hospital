import { Outlet, useNavigate } from "react-router-dom";
import Cookie from "cookie-universal";
import { useEffect, useState } from "react";
import axios from 'axios';
import Err403 from "./403";
import Loading from '../../Components/Loading';

export default function RequireAuth({ allowedRole }) {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://artery-backend.vercel.app/api/manger/login")
      .then((data) => setUser(data.data))
      .catch(() => {
        // This will now correctly wait until the effect has run
        navigate("/login", { replace: true });
      });
  }, [navigate]); // Added navigate as a dependency

  // Token & Cookie
  const cookie = Cookie();
  const token = cookie.get("hospital");

  useEffect(() => {
  const token = cookie.get("hospital"); // Ensure you retrieve the token at the beginning of the useEffect

  if (!token) {
    navigate("/login", { replace: true }); // Redirect to login if no token is found
    return; // Prevent further execution
  }

  axios.get("https://artery-backend.vercel.app/api/manger/login", {
    headers: {
      Authorization: `Bearer ${token}` // Include the token in the request headers
    }
  })
  .then((data) => setUser(data.data))
  .catch((error) => {
    if (error.response && error.response.status === 401) {
      // Handle 401 Unauthorized error
      navigate("/login", { replace: true });
      console.log(error);
    } else {
      // Handle other errors
      console.error("An error occurred:", error);
    }
  });
}, [navigate, cookie]); // Add cookie as a dependency if it's a hook or remove if it's not necessary

  return token ? (
    user === "" ? (
        <Loading />
    ) : allowedRole.includes(user.role) ? (
      <Outlet />
    ) : (
      <Err403 role={user.role} />
    )
  ) : null; // Render nothing if there's no token, as the useEffect will handle navigation
}