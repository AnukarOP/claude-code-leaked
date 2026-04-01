// GitHub: https://github.com/AnukarOP
// Repo: https://github.com/AnukarOP/claude-code-leaked

import uniqBy from 'lodash-es/uniqBy.js'
import { useMemo } from 'react'
import type { MCPServerConnection } from '../services/mcp/types.js'

export function mergeClients(
  initialClients: MCPServerConnection[] | undefined,
  mcpClients: readonly MCPServerConnection[] | undefined,
): MCPServerConnection[] {
  if (initialClients && mcpClients && mcpClients.length > 0) {
    return uniqBy([...initialClients, ...mcpClients], 'name')
  }
  return initialClients || []
}

export function useMergedClients(
  initialClients: MCPServerConnection[] | undefined,
  mcpClients: MCPServerConnection[] | undefined,
): MCPServerConnection[] {
  return useMemo(
    () => mergeClients(initialClients, mcpClients),
    [initialClients, mcpClients],
  )
}
