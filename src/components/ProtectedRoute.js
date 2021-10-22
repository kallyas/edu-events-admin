/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import { Preloader, Sidebar, Footer, Navbar } from "./index";
import { Routes } from "../routes";

function ProtectedRoute({ component: Component, ...rest }) {
  const [loaded, setLoaded] = useState(false);
  const { currentUser } = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem("settingsVisible") === "false" ? false : true;
  };

  const [showSettings, setShowSettings] = useState(
    localStorageIsSettingsVisible
  );

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem("settingsVisible", !showSettings);
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? (
          <>
            <Preloader show={loaded ? false : true} />
            <Sidebar user={currentUser} />

            <main className="content">
              <Navbar user={currentUser} />
              <Component {...props} />
              <Footer
                toggleSettings={toggleSettings}
                showSettings={showSettings}
              />
            </main>
          </>
        ) : (
          <Redirect
            to={{
              pathname: Routes.Login.path,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

export default ProtectedRoute;
