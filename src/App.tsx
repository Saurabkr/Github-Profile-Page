import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ProfileProvider } from "../src/context/ProfileContext";
import LayoutTopNav from "./components/Navbar/TopNavbar";
import ProfilePage from "../src/pages/ProfilePage";
import RepositoriesPage from "../src/pages/RepositoriesPage";
import ProjectsPage from "../src/pages/ProjectsPage";
import PackagesPage from "../src/pages/PackagesPage";
import profileConfig from "../src/config/profileConfig.json";
import StarPage from "../src/pages/StarPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ProfileProvider>
        <LayoutTopNav />
        <div className="">
          <Routes>
            <Route
              path="/"
              element={
                <Navigate
                  to={`/profile/${profileConfig.defaultUsername}`}
                  replace
                />
              }
            />
            <Route path="/profile/:username" element={<ProfilePage />} />
            <Route
              path="/profile/:username/repositories"
              element={<RepositoriesPage />}
            />
            <Route
              path="/profile/:username/projects"
              element={<ProjectsPage />}
            />
            <Route
              path="/profile/:username/packages"
              element={<PackagesPage />}
            />
            <Route path="/profile/:username/stars" element={<StarPage />} />
            <Route
              path="*"
              element={
                <Navigate
                  to={`/profile/${profileConfig.defaultUsername}`}
                  replace
                />
              }
            />
          </Routes>
        </div>
      </ProfileProvider>
    </BrowserRouter>
  );
};

export default App;
