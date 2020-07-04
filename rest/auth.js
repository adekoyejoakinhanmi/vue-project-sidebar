import HttpRepository from '.'

class AuthRepo extends HttpRepository {
  login(credentials) {
    // return this.call('POST', `/login`, credentials)
    return Promise.resolve({ user: { role: 'admin' }, token: 'token' })
  }

  register(credentials) {
    // return this.call('POST', '/regsiter', credentials)
    return Promise.resolve({ user: { role: 'user' }, token: 'token' })
  }
}
export default AuthRepo
