import axios from 'axios';
/*
로그인은 일반 axios 객체를 이용해 해야하고
로그인 결과 엑세스 토큰과 리프레시 토큰을 세션스토리지에 userInfo객체 안에 담아야 한다.
그 이후로는 axiosApiInstance를 이용해 다른 api를 호출하면 알아서 액세스 토큰을 넣어 api를 호출하고 리프래시토큰을 갱신해줌

세션 스토리지에 담는 예제
            const accessToken = response.data.list.accessToken;
            const refreshToken = response.data.list.refreshToken;
            const userInfo = {
                accessToken: accessToken,
                refreshToken: refreshToken,
            };
            window.sessionStorage.setItem("userInfo",JSON.stringify(userInfo));

*/


//refresh 갱신 기능이 있는 axios 인스턴스
export const axiosApiInstance = axios.create({
  baseURL:"http://api.zurazu.com",
});

//Request interceptor for API calls
//요청 전에 헤더에 엑세스 토큰을 넣는다.
axiosApiInstance.interceptors.request.use(
  async config => {
    const sessionObj = window.sessionStorage.getItem('userInfo');
    let userInfo = sessionObj ? JSON.parse(sessionObj) : null;
    
    const accessToken = userInfo.accessToken[0];
    config.headers = {
      Authentication: accessToken,
    }
    return config;
  },
  error => {
    Promise.reject(error)
  });

// Response interceptor for API calls
// 엑세스 토큰이 만료된 경우 refresh토큰으로 엑세스토큰을 갱신하고 다시 요청보낸다
axiosApiInstance.interceptors.response.use((response) => {
  return response
}, async function (error) {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
    // accessToken 만료 시
    originalRequest._retry = true;
    const sessionObj = window.sessionStorage.getItem('userInfo');

    let userInfo = sessionObj ? JSON.parse(sessionObj) : null;
    const access_token = await refreshAccessToken(userInfo.refreshToken[0]);

    if (userInfo) {
      originalRequest.headers['Authentication'] = access_token;
      userInfo.accessToken = [access_token,"Not Null"];
      window.sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
    }
    return axios(originalRequest);
  }
  return Promise.reject(error);
});

const refreshAccessToken = (refreshToken) => {
  //토큰 갱신해서 accessToken 반환
  return new Promise((succ, fail) => {
    axios.post('http://api.zurazu.com/member/refreshToken',{refreshToken: refreshToken}).then((response) => {
      succ(response.data.list.accessToken[0]);
    }).catch((error) => {
      fail(null);
    });
  });
}