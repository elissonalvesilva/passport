import Cookies from 'js-cookie';

const setAccessToken = (token) => {
  Cookies.set('token', token, { expires: 1/3 });
}

const setRefreshToken = (refresh_token) => {
  Cookies.set('refresh_token', refresh_token, { expires: 1/3 });
}

const updateAccessToken = (token) => {
  setAccessToken(token);
}

const updateRefreshToken = (token) => {
  setRefreshToken(token);
}

const setUser = (userData) => {
  localStorage.setItem('user', JSON.stringify(userData));
}

const getAccessToken = () => {
  return Cookies.get('token');
}

const getRefreshToken = () => {
  return Cookies.get('refresh_token');
}

const getUser = () => {
  return JSON.parse(localStorage.getItem('user'));
}

const remove = () => {
  Cookies.remove('token');
  Cookies.remove('refresh_token');
  localStorage.removeItem('user');
}

export const TokenService = {
  setAccessToken,
  setRefreshToken,
  updateAccessToken,
  updateRefreshToken,
  setUser,
  getAccessToken,
  getRefreshToken,
  getUser,
  remove
}
