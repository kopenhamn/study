import axios from "axios";

export const post = (url, { email, password }) => {
  return axios({
    method: "post",
    url,
    data: {
      email,
      password
    }
  });
};
