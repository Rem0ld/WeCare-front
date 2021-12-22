import decode from 'jwt-decode'
import { user } from '../types/user.types'

interface Result {
  accessToken: string
}
export default class Auth {
  static url = 'http://localhost:3000';

  static async logout(){
    localStorage.removeItem('refresh_token');
    const accessToken = localStorage.getItem('access_token');
    try {
      await fetch(`${this.url}/api/auth/logout`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: accessToken
      })
    } catch (error) {
      console.error(error)
      return 'error'
    }

    localStorage.removeItem('access_token');

  }
  
  static async register(newUser: user){
    const body = JSON.stringify(newUser)

    try {
      await fetch(`${this.url}/api/auth/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body
      })
    } catch (error) {
      console.error(error)
      return 'error'
    }
  }

  static async login(email: string, password: string, role: string | undefined) {
    
    const body = JSON.stringify({
      email,
      password,
      role
    })

    try {
      const response = await fetch(`${this.url}/api/auth/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body
      })
      const result: Result = await response.json()

      if (result) {
        localStorage.setItem('access_token', result.accessToken)
        return 'success'
      }

    } catch (error) {
      console.error(error)
      return 'error'
    }
  }

  static async fetch(url: string) {
    // TODO: need to implement a route to refresh token
    const token = localStorage.getItem('access_token')
    const options: any = {
      "Content-Authorization": `Bearer ${token}`
    }
    return window.fetch(url, options)
  }

  isTokenExpired(token: string) {
    try {
      const decoded: { role: string, sub: string, exp: number} = decode(token)
      if (decoded.exp < Date.now() / 1000) {
        // Checking if token is expired. N
        return true
      }
      return false
    } catch (err) {
      return false
    }
  }
}