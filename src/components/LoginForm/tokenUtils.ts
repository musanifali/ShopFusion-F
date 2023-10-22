import jwtDecode from "jwt-decode";
export interface DecodedToken {
  isAdmin?: boolean;
}

export function saveToken(token: string) {
  localStorage.setItem("token", token);
}


export function decodeToken(token: string): DecodedToken {
  return jwtDecode(token) as DecodedToken;
}