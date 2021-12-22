import decode from 'jwt-decode'

interface Result {
  accessToken: string
}
export default class Auth {

  static async login(email: string, password: string, role: string | undefined) {
    const url = 'http://localhost:3000'
    const body = JSON.stringify({
      email,
      password,
      role
    })

    try {
      const response = await fetch(`${url}/api/auth/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body
      })
      const result: Result = await response.json()

      if (result) {
        localStorage.setItem('token', result.accessToken)
        return 'success'
      }

    } catch (error) {
      console.error(error)
      return 'error'
    }
  }

  static async fetch(url: string) {
    // TODO: need to implement a route to refresh token
    const token = localStorage.getItem('token')
    const options: any = {
      "Content-Authorization": `Bearer ${token}`
    }
    return window.fetch(url, options)
  }

  isTokenExpired(token: string) {
    try {
      const decoded: any = decode(token)
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