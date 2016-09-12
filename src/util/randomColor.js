const chars = '0123456789ABCDEF'

/**
 * @return {string}
 */
function randomColor () {
  let ret = ''
  for (let i = 0; i < 6; i++) {
    ret += chars.charAt(Math.floor(Math.random() * 16))
  }
  return ret
}
export default randomColor
