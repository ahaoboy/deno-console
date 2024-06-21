import initCore from "./00_core"
import initConsole from "./01_console"

export function createConsole(noColorStdout = () => true, noColorStderr = () => false) {
  initCore()
  return initConsole(noColorStdout, noColorStderr)
}
