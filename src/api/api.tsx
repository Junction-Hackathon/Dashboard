import axios from "axios";
import { serialize } from "cookie";

export const baseUrl = "https://7878d25ed70e.ngrok-free.app";

const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
  },
});

// instance.interceptors.request.use(
//   (request) => {
//     const accessToken = document.cookie
//       .split(";")
//       .find((cookie: string) => cookie.includes("accessToken"))
//       ?.split("=")[1];
//     if (accessToken) {
//       request.headers["Authorization"] = `Bearer ${accessToken}`;
//     }
//     return request;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// instance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;
//     if (
//       error.response &&
//       error.response.status === 401 &&
//       !originalRequest._retry
//     ) {
//       originalRequest._retry = true;
//       try {
//         const refreshToken = document.cookie
//           .split(";")
//           .find((cookie: string) => cookie.includes("refreshToken"))
//           ?.split("=")[1];
//         if (!refreshToken) {
//           return Promise.reject(error);
//         }
//         const response = await instance.post("/auth/refresh", {
//           refreshToken,
//         });

//         const newAccessToken = response.data.accessToken;
//         const newRefreshToken = response.data.refreshToken;
//         console.log(response.data);
//         if (!newAccessToken) {
//           return Promise.reject(error);
//         }
//         document.cookie = serialize("accessToken", newAccessToken, {
//           httpOnly: false,
//           expires: new Date(Date.now() + 60 * 60 * 1000),
//         });

//         if (newRefreshToken) {
//           document.cookie = serialize("refreshToken", newRefreshToken, {
//             httpOnly: false,
//             expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
//           });
//         }
//         instance.defaults.headers.common[
//           "Authorization"
//         ] = `Bearer ${newAccessToken}`;
//         return instance(originalRequest);
//       } catch (refreshError) {
//         document.cookie = serialize("accessToken", "", {
//           httpOnly: true,
//           expires: new Date(0),
//         });
//         document.cookie = serialize("refreshToken", "", {
//           httpOnly: true,
//           expires: new Date(0),
//         });
//         return Promise.reject(refreshError);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

export default instance;
