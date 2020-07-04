import AuthRepo from '../rest/auth'

const apiPlugin = (ctx, inject) => {
  const modules = {
    auth: new AuthRepo(ctx.$axios)
  }
  inject('api', modules)
}

export default apiPlugin
