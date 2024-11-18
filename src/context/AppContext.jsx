import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currencySymbol = "PKR";

  // state to hold doctors data
  const [doctors, setDoctors] = useState([]);

  // state to hold user data
  const [userData, setUserData] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // state to hold user token for authentication and it prevents logout on page refresh
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : false
  );

  // function that fetches all doctors and updates doctors state
  const getDoctorsData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/doctor/list");

      if (data.success) {
        setDoctors(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // for doctors data
  useEffect(() => {
    getDoctorsData();
  }, []);

  const userProfileData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/user/get-profile", {
        headers: { token },
      });

      if (data.success) {
        setUserData(data.userData);
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // for user data
  useEffect(() => {
    if (token) {
      userProfileData();
    } else {
      setUserData(false);
    }
  }, [token]);

  const value = {
    doctors,
    currencySymbol,
    token,
    setToken,
    backendUrl,
    userData,
    setUserData,
    userProfileData,
    getDoctorsData,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
