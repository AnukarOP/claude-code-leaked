// GitHub: https://github.com/AnukarOP
// Repo: https://github.com/AnukarOP/claude-code-leaked

import type { CommandSpec } from '../registry.js'

const time: CommandSpec = {
  name: 'time',
  description: 'Time a command',
  args: {
    name: 'command',
    description: 'Command to time',
    isCommand: true,
  },
}

export default time
