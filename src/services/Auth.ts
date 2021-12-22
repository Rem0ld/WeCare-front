import decode from 'jwt-decode'
import { User } from '../types/user.types'

interface Result {
  accessToken: string;
  refreshToken: string;
}
export default class Auth {
  static url = "http://localhost:3000";

  static async logout() {
    localStorage.removeItem("refresh_token");
    const accessToken = localStorage.getItem("access_token");
    try {
      await fetch(`${this.url}/api/auth/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ accessToken }),
      });
    } catch (error) {
      console.error(error);
      return "error";
    }

    localStorage.removeItem("access_token");
  }

  static async register(newUser: User) {
    const body = JSON.stringify(newUser)

    try {
      await fetch(`${this.url}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });
    } catch (error) {
      console.error(error);
      return "error";
    }
  }

  static async login(email: string, password: string, role: string | undefined) {
    const body = JSON.stringify({
      email,
      password,
      role,
    });

    try {
      const response = await fetch(`${this.url}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });
      const result: Result = await response.json();

      if (!result.accessToken) {
        throw result
      }

      localStorage.setItem("access_token", result.accessToken);
      localStorage.setItem("refresh_token", result.refreshToken);
      return "success";
    } catch (error) {
      console.error(error);
      return "error";
    }
  }

  static async fetch(url: string) {
    try {
      // TODO: need to implement a route to refresh token
      const token = localStorage.getItem("access_token");
      const headers: any = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      const response = await fetch(`http://localhost:3000${url}`, {
        headers,
      });
      const result = await response.json();

      console.log(result);
      return result;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  static async isTokenExpired(token: string) {
    try {
      const decoded: { role: string; sub: string; exp: number } = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        // Checking if token is expired. N
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  }

  static loggedIn() {
    const token = localStorage.getItem("access_token");
    return token;
  }
}
