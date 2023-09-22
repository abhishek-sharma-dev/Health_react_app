import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";

export function checkIsAuthenticated(token) {
  try {
    const decoded = jwt_decode(token);
    const { exp } = decoded;
    const currentTime = Date.now() / 1000;
    if (exp < currentTime) {
      return false; // token is expired
    }
    return true; // token is valid and user is authenticated
  } catch (err) {
    return false; // token is invalid or couldn't be decoded
  }
}

export const getJwtTokenFromCookie = () => {
  const jwtoken = Cookies.get("jwtoken");

  console.log({jwtoken, all: Cookies.get()});

  if (!!jwtoken) {
    return jwtoken;
  }

  return null;
};

export const removeJwtTokenFromCookie = () => {
  Cookies.remove("jwtoken");
};
