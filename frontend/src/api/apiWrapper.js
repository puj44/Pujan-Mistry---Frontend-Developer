import api from "./api";

export const get = async (url) => {
    try {
      const res = await api().get(url);
      return res;
    } catch (err) {
        console.log("Error: "+err);
      return false;
    }
  };

  export const post = async (url,data) => {
    try {
      const res = await api().post(url,data);
      return res;
    } catch (err) {
        console.log("Error: "+err);
      return false;
    }
  };
  export const remove = async (url,data) => {
    try {
      const res = await api().delete(url,data);
      return res;
    } catch (err) {
        console.log("Error: "+err);
      return false;
    }
  };