  import { ALL_USERS, CHANGE_PASS, CHANGE_PASSWORD, LOGIN_USER, REGISTER_USER, RESQ_PASSWORD, TOOGLE_PERMITION_USER, UPDATE_USER, USER, USER_UPLOAD_IMAGE} from "../helpers/constants";

export function uploadImage(body,dni,autorization){
  return new Promise((resolve) => {
    try {
      fetch(`${USER_UPLOAD_IMAGE}${dni}`, {
        method: "POST",
        headers: {
          Authorization: autorization(),
        },
        body: body,
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

export function updateUser(data,autorization){
  return new Promise((resolve) => {
    try {
      fetch(UPDATE_USER, {
        method: "PUT",
        headers: {
          Authorization: autorization(),
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

export function getUser(email,autorization){
  return new Promise((resolve) => {
    try {
      fetch(`${USER}${email}`, {
        method: "GET",
        headers: {
          Authorization: autorization(),
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

export function changePass(data,autorization){
  return new Promise((resolve) => {
    try {
      fetch(CHANGE_PASS, {
        method: "PUT",
        headers: {
          Authorization: autorization(),
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

export function allUsers(autorization){
  return new Promise((resolve) => {
    try {
      fetch(ALL_USERS, {
        method: "GET",
        headers: {
          Authorization: autorization(),
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

export function togglePermitionUser(data,autorization){
  return new Promise((resolve) => {
    try {
      fetch(TOOGLE_PERMITION_USER, {
        method: "POST",
        headers: {
          Authorization: autorization(),
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