// Copied and maybe simplified (well at least shortened) from
// http://www.easysurf.cc/cnver17.htm#bf16tobf10

const VALID_CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const toValidChars = (string) => string.toUpperCase().replace(/[^0-9A-Z]/g, '').split('')
const charToValue = (char, index) => VALID_CHARS.indexOf(char) * Math.pow(16, -(index + 1))

const hexToDec = (input) => {
  return Number(toValidChars(input).reduce((memo, char, index) => {
    const value = charToValue(char, index)
    const numStr = (memo[0] + value).toString()
    return [Number(numStr), numStr.substring(1, numStr.length)]
  }, [0, ''])[1])
}

export default hexToDec
