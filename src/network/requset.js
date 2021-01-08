import axios from 'axios'

export function request(config) {
  const instance = new axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
    // headers: headers
  })

  instance.interceptors.request.use(config => {
    // Do something before request is sent
    return config;
  }, error => {
    // Do something with request error
    return Promise.reject(error);
  });
  return instance(config)
}