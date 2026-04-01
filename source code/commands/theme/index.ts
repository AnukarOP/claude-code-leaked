// GitHub: https://github.com/AnukarOP
// Repo: https://github.com/AnukarOP/claude-code-leaked

import type { Command } from '../../commands.js'

const theme = {
  type: 'local-jsx',
  name: 'theme',
  description: 'Change the theme',
  load: () => import('./theme.js'),
} satisfies Command

export default theme
