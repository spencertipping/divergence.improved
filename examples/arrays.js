d([0x71, '.foo'])({foo: 'bar'})   // => [1, 'bar']
d([0xee, '.foo'])({foo: 'bar'})   // => [1, 'bar']
d([0xee, '.foo'])(null)           // => [0, null]
d([0xa, 0xb, 0xc])(2, 3)          // => [5, -1, 6]
d([])(1, 2, 3)                    // => []