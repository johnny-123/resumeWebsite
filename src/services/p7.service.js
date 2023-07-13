import axios from "axios";
const API_URL = "http://localhost:8080/api/googleProject";

class AuthServices {
  //   login(email, password) {
  //     return axios.post(API_URL + "/login", {
  //       email,
  //       password,
  //     });
  //   }
  //   logout() {
  //     localStorage.removeItem("user");
  //   }
  //   register(username, email, password, role) {
  //     return axios.post(API_URL + "/register", {
  //       username,
  //       email,
  //       password,
  //       role,
  //     });
  //   }
  //   getCurrentUser() {
  //     return JSON.parse(localStorage.getItem("user"));
  //   }
  // goP7Homepage() {
  //   console.log("goP7");
  //   return axios.get(API_URL);
  // }
}

export default new AuthServices();
