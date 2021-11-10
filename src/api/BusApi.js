import axios from "axios";
import * as URLs from '../const'

const instance = axios.create({
  baseURL : ""
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  //에러코드 처리
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default {
  getTest() {
    return instance({
      url:"/api/test",
      method:"get",
    })
  },

  getBusData() {
    return instance({
      url:"/api/busData",
      method:"get"
    })
  },
  getBusRouteData() {
    return instance({
      url:"/api/busRoute",
      method:"get"
    })
  },
  getBusArrivalData() {
    return instance({
      url:"/api/busArrival",
      method:"get"
    })
  }

}