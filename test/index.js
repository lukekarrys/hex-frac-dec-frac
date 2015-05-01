import test from 'tape'

import hexToDec from '../src/index'

test('it works', (t) => {
  t.equal(hexToDec('a1e189f4df975ee2'), 0.6323477003894289)
  t.equal(hexToDec('0baed468ae66bbd2'), 0.04563643985457139)
  t.end()
})
