import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies";
import axios from "axios";
import { USER, UNITY } from "../service/routes";

export const settings = {
  token: {
    auth: "ATH",
    profileId: "PROFILE",
  },
};
const newCookie = (...params) =>
  params.map((x) =>
    setCookie(undefined, x.name, x.value || null, {
      path: "/",
      maxAge: x.age || 30 * 24 * 60 * 60,
    })
  );
const destroyCookie = () =>
  newCookie(
    { name: settings.token.auth, age: -1 },
    { name: settings.token.profileId, age: -1 }
  );
export const saveCookie = (data) =>
  newCookie(
    { name: settings.token.auth, value: data.token },
    { name: settings.token.profileId, value: data.user._id }
  );

export const AuthContext = createContext({
  isLogged: false,
  user: null,
  unity: null,
  setUnity: () => {},
  setUser: () => {},
  setLogged: () => {},
  signIn: (data) => {},
  signUp: (data) => {},
  signUpUnity: (data) => {},
  logout: () => {},
});

export function Auth({ children }) {
  const [user, setUser] = useState({});
  const [isLogged, setLogged] = useState(false);
  const [unity, setUnity] = useState({});
  const { [settings.token.profileId]: profile, [settings.token.auth]: token } =
    parseCookies();

  const saveUserLogged = ({ data }) => {
    saveCookie(data);
    setUser(data.user);
    if (data.unity !== undefined) setUnity(data.unity);
    setLogged(true);
  };

  useEffect(() => {
    //Check logged
    if (profile && token)
      axios
        .get(USER.PROFILE.replace(/:id/gi, profile), {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((json) => {
          setUser(json.data.user);
          setLogged(true);
          console.log("Check login...");
        })
        .catch((error) => destroyCookie());
    else destroyCookie();
  }, []);

  async function signIn(params, role = "patient") {
    try {
      const json = await axios.post(
        USER.LOGIN.replace(/:role/gi, role),
        params
      );
      saveUserLogged(json.data);
    } catch (error) {
      console.log(error);
      if (error.response === undefined) throw "Fatal error";
      throw error.response.data.message || error.response.data.error;
    }
  }

  async function signUpUnity(params) {
    try {
      const apiUnity = await axios.post(UNITY.CREATE, params, {
        headers: { Authorization: `Bearer ${token}` },
      });
      saveUserLogged(apiUnity.data);
    } catch (error) {
      if (error.response === undefined) throw "Fatal error";
      throw error.response.data.message || error.response.data.error;
    }
  }

  async function signUp(params, role = "patient") {
    try {
      const json = await axios.post(
        USER.REGISTER.replace(/:role/gi, role),
        params
      );
      saveUserLogged(json.data);
    } catch (error) {
      console.log(error);
      if (error.response === undefined) throw "Fatal error";
      throw error.response.data.message || error.response.data.error;
    }
  }

  function logout() {
    destroyCookie();
    document.location.reload;
    setLogged(false);
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        user,
        unity,
        setUnity,
        signIn,
        signUp,
        logout,
        setUser,
        setLogged,
        signUpUnity,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function AuthDashboard(role) {
  switch (role) {
    case "administrator":
      return "../admin/profile";
      break;
    case "patient":
      return "../patient/profile";
      break;
    case "provider":
      return "../clinical/documents";
      break;
    case "consultant":
      return "../consultant/personal";
      break;
  }
}
