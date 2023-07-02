import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import type { PropsWithChildren } from "react"

const queryClient = new QueryClient()
type Props = {}

function ReactQueryProvider({ children }: PropsWithChildren<Props>) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default ReactQueryProvider
