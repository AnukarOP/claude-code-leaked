// GitHub: https://github.com/AnukarOP
// Repo: https://github.com/AnukarOP/claude-code-leaked

import type { Command } from '../../commands.js'

const btw = {
  type: 'local-jsx',
  name: 'btw',
  description:
    'Ask a quick side question without interrupting the main conversation',
  immediate: true,
  argumentHint: '<question>',
  load: () => import('./btw.js'),
} satisfies Command

export default btw
