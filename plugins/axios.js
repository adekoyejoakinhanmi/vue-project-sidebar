export default ({ app: { $axios, router }, store }) => {
  const API_URL = process.env.API_URL
  $axios.setBaseURL(API_URL)
  $axios.onRequest((config) => {
    // eslint-disable-next-line no-console
    console.log(`Making request to ${config.url}`)
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      store.dispatch('logout')
      router.push('/account/login')
    }
  })
}
