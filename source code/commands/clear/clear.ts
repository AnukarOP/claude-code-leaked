// GitHub: https://github.com/AnukarOP
// Repo: https://github.com/AnukarOP/claude-code-leaked

import type { LocalCommandCall } from '../../types/command.js'
import { clearConversation } from './conversation.js'

export const call: LocalCommandCall = async (_, context) => {
  await clearConversation(context)
  return { type: 'text', value: '' }
}
