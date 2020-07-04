class HttpRepository {
  constructor($axios) {
    const methods = {
      POST: $axios.$post,
      GET: $axios.$get,
      PUT: $axios.$put,
      DELETE: $axios.$delete
    }

    this.methods = methods
  }

  getMethod(methodName) {
    return this.methods[methodName]
  }

  async call(method, url, data, opts) {
    try {
      const Axios = this.getMethod(method)
      const $res = await Axios(url, data, opts)
      return $res
    } catch (error) {
      if (error) {
        throw error
      }
      throw new Error(
        'Request timed out or not able to connect to server, please try again.'
      )
    }
  }
}

export default HttpRepository
