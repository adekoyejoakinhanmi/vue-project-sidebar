export const STORAGE_TOKEN = 'RCYP_USER'
export const isEmpty = (obj) =>
  [Object, Array].includes((obj || {}).constructor) &&
  !Object.entries(obj || {}).length
