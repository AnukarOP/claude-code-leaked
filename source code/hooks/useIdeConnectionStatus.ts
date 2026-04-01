// GitHub: https://github.com/AnukarOP
// Repo: https://github.com/AnukarOP/claude-code-leaked

import { useMemo } from 'react'
import type { MCPServerConnection } from '../services/mcp/types.js'

export type IdeStatus = 'connected' | 'disconnected' | 'pending' | null

type IdeConnectionResult = {
  status: IdeStatus
  ideName: string | null
}

export function useIdeConnectionStatus(
  mcpClients?: MCPServerConnection[],
): IdeConnectionResult {
  return useMemo(() => {
    const ideClient = mcpClients?.find(client => client.name === 'ide')
    if (!ideClient) {
      return { status: null, ideName: null }
    }
    // Extract IDE name from config if available
    const config = ideClient.config
    const ideName =
      config.type === 'sse-ide' || config.type === 'ws-ide'
        ? config.ideName
        : null
    if (ideClient.type === 'connected') {
      return { status: 'connected', ideName }
    }
    if (ideClient.type === 'pending') {
      return { status: 'pending', ideName }
    }
    return { status: 'disconnected', ideName }
  }, [mcpClients])
}
