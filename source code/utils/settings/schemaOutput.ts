// GitHub: https://github.com/AnukarOP
// Repo: https://github.com/AnukarOP/claude-code-leaked

import { toJSONSchema } from 'zod/v4'
import { jsonStringify } from '../slowOperations.js'
import { SettingsSchema } from './types.js'

export function generateSettingsJSONSchema(): string {
  const jsonSchema = toJSONSchema(SettingsSchema(), { unrepresentable: 'any' })
  return jsonStringify(jsonSchema, null, 2)
}
