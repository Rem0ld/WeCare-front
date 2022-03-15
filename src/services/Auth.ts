import decode from "jwt-decode";
import { User } from "../types/user.types";
import Cookies from "js-cookie";

interface Result {
  user: User;
  accessToken: string;
}
export default class Auth {
  static url = "http://localhost:3000";

  static async logout() {
    try {
      const response = await this.fetch(`${this.url}/api/auth/logout`, {})
      console.log(response)
    } catch (error) {
      console.error(error);
    } finally {
      localStorage.removeItem('accessToken')
    }
  }

  static async register(newUser: User) {
    const body = JSON.stringify(newUser);

    try {
      await fetch(`${this.url}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
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
        credentials: "include",
        body,
      });
      const result = await response.json();
      const accessToken = Cookies.get("accessToken")
      console.log(accessToken)
      localStorage.setItem("accessToken", result.accessToken)

      return result;
    } catch (error) {
      console.error(error);
      return "error";
    }
  }

  static async fetch(url: string, body: any) {
    const accessToken = localStorage.getItem("accessToken");

    try {
      const headers: any = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      };

      const response = await fetch(`${this.url}${url}`, {
        mode: 'cors',
        credentials: "include",
        headers,
        body: body ? JSON.stringify(body) : null
      });
      const result = await response.json();
      const cookAccessToken = Cookies.get("accessToken");

      if (cookAccessToken && cookAccessToken !== accessToken) {
        localStorage.setItem("accessToken", cookAccessToken)
      }

      // A new access token is set in cookies when request is made
      return result;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  static async isTokenExpired(token: string) {
    try {
      const decoded: { role: string; sub: string; exp: number } = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        // Checking if token is expired.
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  }

  static async refreshAccessToken() {
    const accessToken = localStorage.getItem("accessToken")
    console.log("🚀 ~ file: Auth.ts ~ line 121 ~ Auth ~ refreshAccessToken ~ accessToken", accessToken)

    try {
      const response = await fetch(`${Auth.url}/api/auth/refresh-token`, {
        method: "POST",
        body: JSON.stringify({ accessToken })
      })
      const result = await response.json();

      if (!result) {
        throw new Error(result);
      }

      console.log(result)
      localStorage.setItem("accessToken", result.accessToken)
      return result;

    } catch (error) {
      console.error(error)
    }
  }
}
