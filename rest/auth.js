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

  updateUser(data) {
    // return this.call('PATCH', '/user')
    return Promise.resolve({ message: 'done' })
  }

  forgotPassword(data) {
    // return this.call('POST', '/reset-password', data);
    return Promise.resolve({ message: 'done' })
  }

  sendVerificationCode() {
    // return this.call()
    return Promise.message({ message: 'done' })
  }

  changePassword(credentials) {
    // return this.call('POST', '/change-password', credentials)
    return Promise.resolve({ message: 'done' })
  }

  verifyAccount(data) {
    // return this.call('POST', '/reset-password', data);
    return Promise.resolve({ message: 'done' })
  }
}
export default AuthRepo
