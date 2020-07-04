import Vue from 'vue'
import { format, parseISO, isValid, formatDistanceToNow } from 'date-fns'

Vue.filter('displayDate', (value, f) => {
  const v = parseISO(value)
  if (!isValid(v)) return ''
  return format(v, f || 'do MMM, yyy')
})

Vue.filter('fromNow', (value) => {
  const v = parseISO(value)
  if (!isValid(v)) return ''
  return formatDistanceToNow(v, { addSuffix: true })
})

Vue.filter('capitalize', (value) => {
  if (!value) return ''
  const v = value.toString().toLowerCase()
  return v.charAt(0).toUpperCase() + v.slice(1)
})
