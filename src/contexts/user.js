import { createContext, useEffect, useState } from "react";
import { parseCookies } from "nookies";
import axios from "axios";
import { USER } from "../service/routes";
import { settings } from "./auth";

export const UserContext = createContext({
  update: (data) => {},
  getList: async (data) => {},
  list: [],
});

export function User({ children }) {
  const { [settings.token.profileId]: profile, [settings.token.auth]: token } =
    parseCookies();
  const [list, setList] = useState([]);

  async function getList() {
    try {
      axios
        .get(USER.LIST, { headers: { Authorization: `Bearer ${token}` } })
        .then((x) => setList(x.data.user));
    } catch (error) {
      if (error.response === undefined) throw "Fatal error";
      throw error.response.data.message || error.response.data.error;
    }
  }

  async function update(id, params) {
    try {
      const json = await axios.put(USER.UPDATE.replace(/:id/gi, id), params, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return json;
    } catch (error) {
      if (error.response === undefined) throw "Fatal error";
      throw error.response.data.message || error.response.data.error;
    }
  }

  return (
    <UserContext.Provider value={{ update, getList, list }}>
      {children}
    </UserContext.Provider>
  );
}
