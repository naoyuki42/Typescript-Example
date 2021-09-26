// import World from './world'

// const root = document.getElementById('root')
// const world = new World('Hello World!!')
// world.sayHello(root)

// import { primitiveSample } from './basic'
// import { notExistSample } from './basic'
// import { anySample } from './basic'
// import { unknownSample } from './basic'

// primitiveSample()
// notExistSample()
// anySample()
// unknownSample()

import { logMessage } from './function/basic'
import { isUserSignedIn } from './function/parameters'
import { isUserSignedIn2 } from './function/parameters'
import { sumProductsPrice } from './function/parameters'

logMessage('Hello TypeScript')
isUserSignedIn('ABC', 'Naoyuki')
isUserSignedIn('DEF')
isUserSignedIn2('ABC', 'Nao')
isUserSignedIn2('DEF')
const sum = sumProductsPrice(100, 200, 300, 400, 500, 600)
console.log('Function parameters Sample 5:' + sum)
