/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import decode from "jwt-decode"
import useToken from "../utils/useToken";

import { Preloader, Sidebar, Footer, Navbar } from "./index"
import { Routes } from "../routes"
import { AuthService } from "../service/AuthService"

function ProtectedRoute({ component: Component, ...rest }) {
    const [loaded, setLoaded] = useState(false);
    const history = useHistory();
    const { token } = useToken()
    const user = decode(token)
  
    useEffect(() => {
      const timer = setTimeout(() => setLoaded(true), 1000);
      if (token && decode(token)?.exp * 1000 < new Date().getTime()){
        AuthService.logout();
        return history.push({
          pathname: Routes.Login.path,
          state: { sessionExpired: true }
        })
      }
      return () => clearTimeout(timer);
    }, [token]);
  
    const localStorageIsSettingsVisible = () => {
      return localStorage.getItem('settingsVisible') === 'false' ? false : true
    }
  
    const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);
  
    const toggleSettings = () => {
      setShowSettings(!showSettings);
      localStorage.setItem('settingsVisible', !showSettings);
    }


  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <>
          <Preloader show={loaded ? false : true} />
          <Sidebar user={user} />
          
          <main className="content">
            <Navbar user={user}/>
              <Component token={token} {...props} user={user}/>
            <Footer toggleSettings={toggleSettings} showSettings={showSettings} />
          </main>
          </>
        ) : (
          <Redirect
            to={{ pathname: Routes.Login.path, state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default ProtectedRoute;