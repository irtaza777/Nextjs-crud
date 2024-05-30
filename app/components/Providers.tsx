"use client"
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { FC,ReactNode } from 'react'

interface ProvidersProps{
children:ReactNode
}
const queryCLient=new QueryClient()
  const Providers: FC<ProvidersProps> = ({children}) => {
  return (
    <div>
      <QueryClientProvider client={queryCLient}>
{children}
      </QueryClientProvider>
    </div>
  )
}

export default Providers
