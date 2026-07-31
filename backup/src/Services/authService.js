import axios from "axios";

const API = axios.create({
  baseURL: "https://interactive-algorithm-visualizer-9.onrender.com/api",
});


export const registerUser = (data) =>
  API.post("/auth/register", data);

export const verifyOTP = (data) =>
  API.post("/auth/verify-otp", data);

export const loginUser = (data) =>
  API.post("/auth/login", data);

export const getProfile = (token) =>
  API.get("/user/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export default API;