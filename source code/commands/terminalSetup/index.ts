// GitHub: https://github.com/AnukarOP
// Repo: https://github.com/AnukarOP/claude-code-leaked

import type { Command } from '../../commands.js'
import { env } from '../../utils/env.js'

// Terminals that natively support CSI u / Kitty keyboard protocol
const NATIVE_CSIU_TERMINALS: Record<string, string> = {
  ghostty: 'Ghostty',
  kitty: 'Kitty',
  'iTerm.app': 'iTerm2',
  WezTerm: 'WezTerm',
}

const terminalSetup = {
  type: 'local-jsx',
  name: 'terminal-setup',
  description:
    env.terminal === 'Apple_Terminal'
      ? 'Enable Option+Enter key binding for newlines and visual bell'
      : 'Install Shift+Enter key binding for newlines',
  isHidden: env.terminal !== null && env.terminal in NATIVE_CSIU_TERMINALS,
  load: () => import('./terminalSetup.js'),
} satisfies Command

export default terminalSetup
