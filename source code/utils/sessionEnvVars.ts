// GitHub: https://github.com/AnukarOP
// Repo: https://github.com/AnukarOP/claude-code-leaked

/**
 * Session-scoped environment variables set via /env.
 * Applied only to spawned child processes (via bash provider env overrides),
 * not to the REPL process itself.
 */
const sessionEnvVars = new Map<string, string>()

export function getSessionEnvVars(): ReadonlyMap<string, string> {
  return sessionEnvVars
}

export function setSessionEnvVar(name: string, value: string): void {
  sessionEnvVars.set(name, value)
}

export function deleteSessionEnvVar(name: string): void {
  sessionEnvVars.delete(name)
}

export function clearSessionEnvVars(): void {
  sessionEnvVars.clear()
}
