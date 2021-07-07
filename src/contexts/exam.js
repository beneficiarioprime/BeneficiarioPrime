import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies";
import axios from "axios";
import { EXAM } from "../service/routes";
import { settings } from "./auth";

export const ExamContext = createContext({
  list: [],
  create: (data) => {},
  remove: (data) => {},
  getList: () => {},
  pagination: {
    quantity: 0,
    page: 0,
  },
});

export function Exam({ children }) {
  const { [settings.token.profileId]: profile, [settings.token.auth]: token } =
    parseCookies();
  const [list, setList] = useState([]);
  const [pagination, setPagination] = useState({
    quantity: 0,
    page: 0,
  });

  useEffect(() => {
    if (profile && token)
      getList().then((x) => console.log("loading exams..."));
  }, []);

  async function getList(page = 1, limit = 10) {
    try {
      axios
        .get(EXAM.LIST.replace(/:number/gi, page).replace(/:limit/gi, limit), {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((x) => {
          try {
            const { quantity, page, exam } = x.data.data;
            setPagination({
              quantity,
              page,
              maxPage: ~~quantity / limit,
            });
            setList(exam);
          } catch (e) {
            setList([]);
          }
        });
    } catch (error) {
      if (error.response === undefined) throw "Fatal error";
      throw error.response.data.message || error.response.data.error;
    }
  }

  async function remove(id) {
    try {
      const json = await axios.delete(EXAM.REMOVE.replace(/:id/gi, id), {
        headers: { Authorization: `Bearer ${token}` },
      });
      await getList();
    } catch (error) {
      if (error.response === undefined) throw "Fatal error";
      throw error.response.data.message || error.response.data.error;
    }
  }

  async function create(params) {
    try {
      const json = await axios.post(EXAM.CREATE, params, {
        headers: { Authorization: `Bearer ${token}` },
      });
      await getList();
    } catch (error) {
      if (error.response === undefined) throw "Fatal error";
      throw error.response.data.message || error.response.data.error;
    }
  }

  return (
    <ExamContext.Provider value={{ list, remove, create, getList, pagination }}>
      {children}
    </ExamContext.Provider>
  );
}
