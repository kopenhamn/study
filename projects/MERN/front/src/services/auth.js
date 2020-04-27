const USER_KEY = "user";

export const getUser = () => {
  try {
    return JSON.parse(localStorage.getItem(USER_KEY));
  } catch (error) {
    return localStorage.removeItem(USER_KEY);
  }
};

export const setUser = user =>
  localStorage.setItem(USER_KEY, JSON.stringify(user));
