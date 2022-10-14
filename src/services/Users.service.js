import { LOGIN_USER, REGISTER_USER } from "../helpers/constants";

export function loginUser(data){
    return new Promise((resolve) => {
      try {
        fetch(LOGIN_USER, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body:JSON.stringify(data),
          mode: "cors",
        })
          .then((res) => res.json())
          .then((data) => resolve(data))
          .catch((err) => resolve(err));
      } catch (error) {
        Promise.reject(error);
      }
    });
  }
export function registerUser(data){
    return new Promise((resolve) => {
      try {
        fetch(REGISTER_USER, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body:JSON.stringify(data),
          mode: "cors",
        })
          .then((res) => res.json())
          .then((data) => resolve(data))
          .catch((err) => resolve(err));
      } catch (error) {
        Promise.reject(error);
      }
    });
  }