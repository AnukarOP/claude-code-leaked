// GitHub: https://github.com/AnukarOP
// Repo: https://github.com/AnukarOP/claude-code-leaked

import type { Command } from '../../commands.js'

export default {
  type: 'local-jsx',
  name: 'usage',
  description: 'Show plan usage limits',
  availability: ['claude-ai'],
  load: () => import('./usage.js'),
} satisfies Command
