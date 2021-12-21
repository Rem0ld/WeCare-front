

export default class Auth {
  static async fetch(url: string) {
    // TODO: need to implement a route to refresh token
    const token = localStorage.getItem('token')
    const options: any = {
      "Content-Authorization": `Bearer ${token}`
    }
    return window.fetch(url, options)
  }
}