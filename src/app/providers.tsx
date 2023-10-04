'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { mgTheme } from '@/theme-config/theme'
export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={mgTheme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}