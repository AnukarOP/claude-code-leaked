// GitHub: https://github.com/AnukarOP
// Repo: https://github.com/AnukarOP/claude-code-leaked

import type { Command } from '../../commands.js'

export default {
  type: 'local-jsx',
  name: 'diff',
  description: 'View uncommitted changes and per-turn diffs',
  load: () => import('./diff.js'),
} satisfies Command
