// GitHub: https://github.com/AnukarOP
// Repo: https://github.com/AnukarOP/claude-code-leaked

import type { Command } from '../../commands.js'

const skills = {
  type: 'local-jsx',
  name: 'skills',
  description: 'List available skills',
  load: () => import('./skills.js'),
} satisfies Command

export default skills
