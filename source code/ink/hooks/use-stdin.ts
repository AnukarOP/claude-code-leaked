// GitHub: https://github.com/AnukarOP
// Repo: https://github.com/AnukarOP/claude-code-leaked

import { useContext } from 'react'
import StdinContext from '../components/StdinContext.js'

/**
 * `useStdin` is a React hook, which exposes stdin stream.
 */
const useStdin = () => useContext(StdinContext)
export default useStdin
