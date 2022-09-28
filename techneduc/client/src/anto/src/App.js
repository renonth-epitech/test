import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import SignUp from "./views/login/SignUp";
import PrivateRoute from "./PrivateRoute";
import Landing from "./views/login/Landing";
import LogIn from "./views/login/LogIn";
import Profile from "./views/Dashboard/Profile";
import Classes from "./views/Dashboard/Classes";
import Lessons from "./views/Dashboard/Lessons";
import Messages from "./views/Dashboard/Messages";
import Schedule from "./views/Dashboard/Schedule";
import Settings from "./views/Dashboard/Settings";
import { AuthProvider } from "./views/login/AuthContext";
import 'boxicons/css/boxicons.min.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route exact path="/home" element={<Home />} />
          </Route>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
