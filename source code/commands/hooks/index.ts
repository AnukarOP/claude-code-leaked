// GitHub: https://github.com/AnukarOP
// Repo: https://github.com/AnukarOP/claude-code-leaked

import type { Command } from '../../commands.js'

const hooks = {
  type: 'local-jsx',
  name: 'hooks',
  description: 'View hook configurations for tool events',
  immediate: true,
  load: () => import('./hooks.js'),
} satisfies Command

export default hooks
