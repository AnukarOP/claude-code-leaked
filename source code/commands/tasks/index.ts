// GitHub: https://github.com/AnukarOP
// Repo: https://github.com/AnukarOP/claude-code-leaked

import type { Command } from '../../commands.js'

const tasks = {
  type: 'local-jsx',
  name: 'tasks',
  aliases: ['bashes'],
  description: 'List and manage background tasks',
  load: () => import('./tasks.js'),
} satisfies Command

export default tasks
