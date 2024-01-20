import initCore from "./00_core"
import initConsole from "./01_console"

export function createConsole() {
  initCore()
  return initConsole(() => true)
}

const Console = createConsole()
const log = (s: string) => globalThis.console.log(s)
const console = new Console(log)
console.log("s222")
