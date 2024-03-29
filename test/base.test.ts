import { createConsole } from "../src"
const Console = createConsole(() => false)
const log = (s: string) => globalThis.console.log(s.slice(0, -1))
const console = new Console(log)
console.log(1)
console.log([1, '2'])
console.log(new Map())
console.log(new Set())
console.log(new Proxy({}, {}))
