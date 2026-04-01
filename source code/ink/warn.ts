// GitHub: https://github.com/AnukarOP
// Repo: https://github.com/AnukarOP/claude-code-leaked

import { logForDebugging } from '../utils/debug.js'

export function ifNotInteger(value: number | undefined, name: string): void {
  if (value === undefined) return
  if (Number.isInteger(value)) return
  logForDebugging(`${name} should be an integer, got ${value}`, {
    level: 'warn',
  })
}
