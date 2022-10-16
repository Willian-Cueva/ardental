import { ALL_USERS, CHANGE_PASS, CHANGE_PASSWORD, LOGIN_USER, REGISTER_USER, RESQ_PASSWORD, TOOGLE_PERMITION_USER, UPDATE_USER, USER } from "../helpers/constants";

export function updateUser(data){
  return new Promise((resolve) => {
    try {
      fetch(UPDATE_USER, {
        method: "PUT",
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

export function getUser(email){
  return new Promise((resolve) => {
    try {
      fetch(`${USER}${email}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        mode: "cors",
      })
        .then((res) => res.json())
        .then((data) => resolve(data.data))
        .catch((err) => resolve(err));
    } catch (error) {
      Promise.reject(error);
    }
  });
}

export function changePass(data){
  return new Promise((resolve) => {
    try {
      fetch(CHANGE_PASS, {
        method: "PUT",
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
export function changePassword(data){
  return new Promise((resolve) => {
    try {
      fetch(CHANGE_PASSWORD, {
        method: "PUT",
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
export function sendEmailUser(data){
  return new Promise((resolve) => {
    try {
      fetch(RESQ_PASSWORD, {
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

export function allUsers(){
  return new Promise((resolve) => {
    try {
      fetch(ALL_USERS, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
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

export function togglePermitionUser(data){
  return new Promise((resolve) => {
    try {
      fetch(TOOGLE_PERMITION_USER, {
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