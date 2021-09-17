import React, { useState, useEffect, createContext, useContext } from 'react';
import getUsers from '../service/getUserService';
import getEvents from '../service/getEventsService';
import { getProjects } from '../service/AddProjectService';
import UploadImageService from '../service/UploadImageService';

const AdminContext = createContext();

export function useAdmin() {
  return useContext(AdminContext);
}

const StateProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);
  const [imgUrl, setImgUrl] = useState('');

  function getUrl(image) {
    return UploadImageService(image).then((url) => console.log(url));
  }

  useEffect(() => {
    getEvents().then((data) => setEvents(data));
    getProjects().then((data) => setProjects(data));
    getUsers().then((data) => setUsers(data));
    setLoading(false);

    return {};
  }, []);

  const values = {
    events,
    users,
    projects,
    loading,
    imgUrl,
    getUrl,
  };
  return <AdminContext.Provider value={values}>{children}</AdminContext.Provider>;
};

export { StateProvider };
