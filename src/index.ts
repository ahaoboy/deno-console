import initCore from "./00_core"
import initConsole from "./01_console"

export function createConsole(noCOlor = () => true) {
  initCore()
  return initConsole(noCOlor)
}
