d(0x71a, 'amap')([1, 2, 3, 4])          // => [2, 3, 4, 5]
d(0x8a, 'amap')([1, 2, 'foo'])          // => [2, 4, 'foofoo']
d(0xee, 'amap')(['foo', null])          // => [true, false]
d(0xee, 'amap')([])                     // => []
d(0x8c, 'amap')([1, 2, 3])              // => [1, 4, 9]
d(-0x8c, 'amap')([1, 2, 3])             // => [[1], [4], [9]]